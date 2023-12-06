import { UserPlusIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const features = [
  {
    name: 'Cadastro de Usuário',
    description:
      'Sessão para Cadastro de Pacientes',
    icon: UserPlusIcon,
    href: '/navigation/cadastro',
  },
  {
    name: 'Acompanhe o Paciente',
    description:
      'Monitoramento Remoto e On-line.',
    icon: PresentationChartBarIcon,
    href: '/navigation/monitoramento'
  },
  // {
  //   name: 'Simple queues',
  //   description:
  //     'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
  //   icon: ArrowPathIcon,
  // },
  // {
  //   name: 'Advanced security',
  //   description:
  //     'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
  //   icon: FingerPrintIcon,
  // },
]

export default function Navegacao(props: any) {
  return (
    <div className="flex flex-col justify-center items-center m-10">
      <div className="text-6xl text-orange-900 pb-20">
        Apresentação Projeto Final
      </div>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Monitoramento On-line de Batimentos Cardíacos através da rede 5G
      </p>
      <p className="mt-6 text-2xl leading-8 text-slate-800">
        O projeto em epígrafe tem como objetivo mensurar a confiabilidade da rede para que médicos e enfermeiros possam monitorar pacientes de forma remota
      </p>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) =>
          (
            <div key={feature.name} className="relative pl-16">
              <Link href={feature.href}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </Link>
            </div>
          ))}
        </dl>
      </div>
    </div>

  )
}
