import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Лендинг фитнес-клуба",
    category: "Лендинг",
    image: "/modern-ecommerce-website.png",
    description:
      "Продающий лендинг для премиального фитнес-клуба. Акцент на эмоцию и CTA — конверсия в заявку выросла на 40% после запуска.",
    tags: ["Лендинг", "Дизайн", "Анимации"],
  },
  {
    title: "Корпоративный сайт IT-компании",
    category: "Корпоративный сайт",
    image: "/professional-corporate-website.png",
    description:
      "Многостраничный сайт для технологической компании: услуги, кейсы, команда и блог. Современный строгий дизайн под B2B-аудиторию.",
    tags: ["Корпоративный", "Многостраничный", "B2B"],
  },
  {
    title: "Pitch-дек для стартапа",
    category: "Презентация",
    image: "/creative-portfolio-website.png",
    description:
      "Инвесторская презентация для tech-стартапа. 14 слайдов, которые помогли привлечь первый раунд финансирования.",
    tags: ["Презентация", "Pitch-дек", "Инвестиции"],
  },
  {
    title: "Сайт ресторана",
    category: "Лендинг + меню",
    image: "/restaurant-website-design.png",
    description:
      "Сайт для ресторана с онлайн-меню, галереей и формой бронирования. Уютный дизайн, который отражает атмосферу заведения.",
    tags: ["Ресторан", "Лендинг", "Меню"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши работы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Проекты, которыми мы гордимся. Каждый — результат плотной работы с клиентом и внимания к деталям.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
