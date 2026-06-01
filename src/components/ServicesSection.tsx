import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Palette, Code, Share2, Target, Search } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Лендинги",
    description:
      "Создаём продающие одностраничники, которые работают круглосуточно. Чёткая структура, убедительный текст и дизайн, который ведёт посетителя прямо к заявке.",
  },
  {
    icon: Code,
    title: "Корпоративные сайты",
    description:
      "Многостраничные сайты для компаний: визитки, каталоги, порталы. Современный дизайн, удобная навигация и быстрая загрузка на любом устройстве.",
  },
  {
    icon: Palette,
    title: "Презентации",
    description:
      "Разрабатываем бизнес-презентации, которые убеждают инвесторов, партнёров и клиентов. Чистый дизайн, ясная структура, сильные визуалы — всё, чтобы вас запомнили.",
  },
  {
    icon: Share2,
    title: "Pitch-деки",
    description:
      "Презентации для инвесторов и стартапов. Помогаем выстроить историю, упаковать продукт и донести ценность в 10–15 слайдах, которые хочется смотреть.",
  },
  {
    icon: Target,
    title: "Редизайн",
    description:
      "Обновляем устаревшие сайты и презентации. Анализируем слабые места и создаём современное решение, которое усиливает ваш бренд и повышает доверие аудитории.",
  },
  {
    icon: Search,
    title: "SEO-оптимизация",
    description:
      "Оптимизируем сайт так, чтобы клиенты находили вас сами. Работаем с техническим SEO, структурой и скоростью — чтобы вы были выше в поиске Google и Яндекса.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Что мы делаем
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          В чем мы <span className="text-primary">сильны</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Сайты и презентации под ключ — от идеи до готового результата, который можно сразу показывать клиентам и партнёрам.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}