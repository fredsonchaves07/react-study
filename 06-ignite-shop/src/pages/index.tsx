import { styled } from "@/styles";

const Button = styled('button', {
  backgroundColor: '$green500',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',
  span: {
    fontWeight: 'bold'
  },
  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <Button><span>Teste</span>Enviar</Button>
  );
}
