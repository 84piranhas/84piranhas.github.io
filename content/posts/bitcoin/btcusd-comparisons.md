---
author: "84piranhas"
title: "Bitcoin - comparisons between DCA, DVA and lump-sum investing"
date: "2021-01-21"
lastmod: "2021-01-26"
#description: "Strategy"
summary: Basic statistics of different methods of investments, yearly comparison, 2015-2020
tags: ["english", "bitcoin", "crypto", "dca", "dva", "lump-sum"]
hideMeta: true
weight: 1
showtoc: true
tocopen: true
#url: "home" # by default = "posts/{title}"
aliases: [""]
#series: ["code"]
categories: ["crypto"]
math: true
---

{{< highcharts-imports >}}

{{< highcharts-settings >}}

{{< math.inline >}}
{{ if or .Page.Params.math .Site.Params.math }}
<!-- KaTeX -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js" integrity="sha384-y23I5Q6l+B6vatafAwxRu/0oK/79VlbSz7Q9aiSZUvyWYIYsd+qj+o24G5ZU2zJz" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js" integrity="sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script>
{{ end }}
{{</ math.inline >}}

{{< math.inline >}}
<p>
Inline math: \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
</p>
{{</ math.inline >}}

Block math:
$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$

# Introduction

We consider here the case of an individual investor in bitcoin. We ignore the composition of his portfolio, we simply believe that this investor wants to place a certain amount of cash in the crypto currency.

The choice of investment method may depend on the sensitivity to:
- control the price of the investment
- the desired frequency for the execution of orders
- making a profit
- maximization of the number of units in the currency
- volatility

5 méthodes d'investissement dans le bitcoin, regroupables en 3 groupes, sont analysées.
Pour les 5 méthodes, 2600 USD seront dépensés dans chaque.

La première méthode est le <a href="../btcusd-dca" target="_blank">dollar-cost averaging</a>.
L'investissement est réalisé de manière périodique et uniforme, déterminé à l'avance.

Les 2 méthodes suivantes s'inspirent du <a href="../btcusd-dva" target="_blank">dollar-value averaging</a>.
L'investissement est réalisé de manière périodique, mais n'est pas uniforme. Les sommes apportées vont l'être en rapport à la valeur courante de l'investissement.
Dans la première version, l'ajustement à la baisse n'est pas permis. Dans la seconde version, la vente de titres est possible dans le cas où la valeur de l'investissement dépasse les prévisions. Dans le cas où la valeur de l'investissement est plus faible, l'achat sera plus conséquent.

Enfin, la dernière méthode correspond à l'investissement en une seule fois, c'est le <a href="../btcusd-lumpsum" target="_blank">lump-sum investing</a>. Nous présentons le cas où l'investissement se fait en début d'année et le cas où il se fait en milieu d'année.


## Définitions

Les méthodes d'investissement:
- dca = dollar-cost averaging, 50 USD invested in bitcoin every Tuesday

- dva (no withdraw) = dollar-value averaging, without the possibility to sell, adjusted amount of USD invested in bitcoin every Tuesday in order to have 2600 USD at the end of the year according to the value of the bitcoin.

- dva (crypto + cash) = dollar-value averaging with the possibility to go long/short, adjusted amount of USD invested in bitcoin every Tuesday in order to have 2600 USD at the end of the year according to the value of the bitcoin

- lump-sum =  2600 USD invested on Tuesday of the first week of the year

- lump-sum mid-year = 2600 USD invested on Tuesday of the 27<sup>th</sup> week of the year

Les indicateurs

- sharpe = the [Sharpe ratio](https://en.wikipedia.org/wiki/Sharpe_ratio), the annualized average of the daily returns of the difference between the value of the crypto portofolio and the cash in a banking account (0% of interest) over the standard deviation of those returns

- drawdown = the [max drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics)), the maximum decrease of the value of the portfolio during the year

- btc = the accumulated bitcoins, the number of bitcoins still hold in the portfolio

- profit = the difference between the value of the investment in bitcoin and the cash that would be held on a banking account instead

# Observations



# Matrix

{{< graph-btcusd-resume >}}

# Details by year

The lump-sum investing is the method that presents the most profitable years, except for 2015 and 2018.
The main drawback of this method is that it could depend on the only moment the investment is made. For example, the value of the bitcoin was particulary high in January compared to the following months. We can compare also the investment made in January vs. the investment made in July. Invest later in the year can be seen as a waste of time when the market has already went up, cf. 2016, 2017 and 2019.  
**The sooner you got involved in bitcoin, the better you did.**

The DCA presents a very decent profile as the profit is among the best and the accumulated bitcoins, while lower that the lump-sum made at the beginning of the year, it is the most often significantly higher than the others.  
**DCA is a good method to be exposed to the bitcoin while mitigating the risk of being wrong in the market timing.**

The first method of the DVA (no short) does not present a good profile vs. the DCA, except for the very bad year of the bitcoin in 2018, when the DVA acculumated a lot of bitcoins. Nevertheless, the DVA is fixing the 2600 USD at the year of the year, meaning that it lets a certain amount of availabe cash untouched in the case the bitcoin has risen steadily.

The second method of the DVA is very good for gaining profit on USD. As the value of the bitcoin rises, the investor liquidates the positions that are over the conservative target. If you value more USD than bitcoins, it is a good method.  
**If HODL is the mantra, DVA is to avoid.**



{{< graph-btcusd-resume-byyear >}}