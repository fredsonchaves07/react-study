import { SuperSEO } from 'react-super-seo'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export function SignIn() {
  return (
    <>
      <SuperSEO title="Login" description="Hi!" />
      <div className="p-8">
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tighter">
              Acessar painel
            </h2>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email"></Input>
            </div>
            <Button className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
