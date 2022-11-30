// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "information": [
      {
        "title": "Google",
        "content": "Google is trusted not only for its environment friendly initiatives but also due to their outspoken CEO Sundar Pichai. He stands up against social issues including President Donald Trump's anti-Muslim comments. Google also earned RI's highest CSR score much in part due to their data center using 50% less energy than others in the world. They also have committed over $1 billion to renewable energy projects and enable other businesses to reduce their environmental impact through services such as Gmail."
      },
      {
        "title": "Coca-Cola",
        "content": "Coca-Cola's massive fleet of delivery trucks contributed 3.7 million metric tons of greenhouse gases to the world. They have made major changes to their supply chain practices including investing in new alternatively fueled trucks. Their initiatives are intended to create a 25% reduction in their carbon footprint by 2020."
      },
      {
        "title": "Wells Fargo",
        "content": "Wells Fargo donates up to 1.5% of its revenue to charitable causes each year. which has raised $286.5 million in 2017 alone to more than 14,500 nonprofits through philanthropy such as food banks and incubators to hasten the speed to market for start-ups. They also provide employees two paid days off per year to volunteer and give back to the charity of their choice."
      },
      {
        "title": "Starbucks",
        "content": "With an eye to hiring, Starbucks is looking to diversify their workforce and provide opportunities for certain cohorts. By 2025 it has pledged to hire 25,000 veterans by 2025 as part of their socially responsible efforts. This hiring initiative will also look to hire more younger people with the aim of 'helping jump-start careers by giving them their first job'. While globally the company has joined with the UN Refugee Agency to scale up the company's support and efforts to reach refugee candidates to hire 10,000 refugees by 2022."
      }
    ]
  })
}
