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
math: false
---

{{< highcharts-imports >}}

{{< highcharts-settings >}}

# Introduction

We consider the case of an individual investor in bitcoin. We ignore the composition of his portfolio, we simply believe that this investor wants to place a certain amount of cash in the crypto currency.

The choice of investment method may depend on the sensitivity to:
- control the price of the investment
- the desired frequency for the execution of orders
- make a profit
- maximize the number of units in the currency
- volatility

5 basic methods of investing, spliited in 3 groups, are analyzed.

The first method is the <a href="../btcusd-dca" target="_blank">dollar-cost averaging</a>.
The investment is uniform and periodic, both amount and frequency are determined in advance.

The 2 following methodes are derived from the <a href="../btcusd-dva" target="_blank">dollar-value averaging</a>.
The investment is period and it is not uniform. The amount of purchases depend on the current value of the investment compared to a predetermined target.  
In the first version, the sales are not allowed. In the second version, the sales of bitcoins are authorized. 

The last method is a single payment of money, the <a href="../btcusd-lumpsum" target="_blank">lump-sum investing</a>. We present the case for which the investment is made at the beginning of the year, and the case for which the investment is made in the middle of the year.


# Definitions

 ## Investment methods

- **dca** = dollar-cost averaging, 50 USD invested in bitcoin every Tuesday

- **dva (no withdraw)** = dollar-value averaging, without the possibility to sell, adjusted amount of USD invested in bitcoin every Tuesday in order to have an amount of bitcoins that equals 2600 USD at the end of the year

- **dva (full)** = dollar-value averaging with the possibility to go long/short, adjusted amount of USD invested in bitcoin every Tuesday in order to have an amount of bitcoins that equals 2600 USD at the end of the year

- **lump-sum** =  2600 USD invested on Tuesday of the first week of the year

- **lump-sum mid-year** = 2600 USD invested on Tuesday of the 27<sup>th</sup> week of the year

## Indicators

- sharpe = the [Sharpe ratio](https://en.wikipedia.org/wiki/Sharpe_ratio), the annual return of the value of the crypto portfolio added to the realized profit if any (in case of the DVA with the full adjustment) over the annualized standard deviation of the daily returns

- drawdown = the [Max drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics)), the maximum decrease of the value of the portfolio during the year

- btc = the **Accumulated bitcoins**, the number of bitcoins still hold in the portfolio at then end of the year

- **profit** = the difference between the value of the investment in bitcoin (+ the realized profit) and the cash that would be held on a banking account instead

- **expenses** =  the total amount invested in USD for the purchases of the bitcoins

- **realized profit** = the cash withdrawn from the sales of the bitcoins (in case of the full adjustment that occurs with the DVA)


# Matrix of statistics

{{< graph-btcusd-resume >}}

# Details by year

The *lump-sum investing* is the method that presents the most profitable years, except for 2015 and 2018.
The main drawback of this method is that it could depend on the only moment the investment is made. For example, the value of the bitcoin was particulary high in January compared to the following months. We can compare also the investment made in January vs. the investment made in July. Invest later in the year can be seen as a waste of time when the market has already went up, cf. 2016, 2017 and 2019.  
> **The sooner you got involved in bitcoin, the better you did.**

The *DCA* presents a very decent profile as the profit is among the best and the number of accumulated bitcoins, while lower than the lump-sum made at the beginning of the year, is the most often significantly higher than the other methods.  
> **DCA is a good method to be exposed to the bitcoin while mitigating the risk of being wrong in the market timing.**

*DVA* methods are subject to a wide range of papers exploring the pros and cons of them.
The first method of the DVA (no short allowed) is slightly better than the DCA if we take a look at the statistics: Sharpe ratio and max drawdown.
The second method of the DVA is very good for gaining profit on USD. As the value of the bitcoin rises, the investor liquidates the positions that are over the conservative target. If you value more USD than bitcoins, it is a good method.
Both methods present a major drawback, the investor does not control the expenses made on the market. In the case of the bitcoin between 2015 and 2020, the investment has been often lower than for DCA and lump-sum methods, but when the bitcoin was challenged a bit more, the expenses can double (2018).
The second drawback is that the accumulation of bitcoins is less pronounced.  
> **If HODL is the mantra, DVA is to avoid.**

{{< graph-btcusd-resume-byyear >}}