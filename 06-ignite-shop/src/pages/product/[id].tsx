import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetail } from './product'
import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'

interface ProductProps {
    product: {
        id: string,
        name: string,
        imageUrl: string,
        price: string,
        description: string,
        defaultPrice: string
    }
}

export default function Product({product}: ProductProps) {
    const {isCreateingCheckoutSession, setIsCreateingCheckoutSession} = useState(false)
    
    async function handleBuyProduct() {
        try {
            setIsCreateingCheckoutSession(true)
            const response = await axios.post('/api/checkout', {
                priceId: product.defaultPrice
            })

            const { checkoutUrl } = response.data

            // Redirecionamento por aplicação externa
            window.location.href = checkoutUrl
        } catch (err) {
            setIsCreateingCheckoutSession(false)
            alert("Falha ao redirecionar ao checkout")
        }
    }

    const { isFallback } = useRouter()

    if (isFallback) {
        return <p>Loading</p>
    }

    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={480} alt=''/>
            </ImageContainer>
            <ProductDetail>
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <p>{product.description}</p>
                <button disabled={isCreateingCheckoutSession} onClick={handleBuyProduct}>Comprar agora</button>
            </ProductDetail>
        </ProductContainer>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    // Buscar por produtos mais acessados
    return {
        paths: [
            {params: "prod_Se1mwMggH5ylM5"}
        ],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<any, { id: string}> = async({ params }) => {
    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price
    
    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(price.unit_amount != null ? price.unit_amount : 0 / 100),
                description: product.description,
                defaultPriceId: price.id
            }
        },
        revalidate: 60 * 60 * 1
    }
}