---
author: "84piranhas"
title: "Monero - comparisons between DCA, DVA and lump-sum investing"
date: "2021-02-12"
lastmod: "2021-02-12"
#description: "Strategy"
summary: Basic statistics of different methods of investments, yearly comparison, 2015-2020
tags: ["english", "monero", "crypto", "dca", "dva", "lump-sum"]
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

We consider the case of an individual investor in monero. We ignore the composition of his portfolio, we simply believe that this investor wants to place a certain amount of cash in the crypto currency.

The choice of investment method may depend on the sensitivity to:
- control the price of the investment
- the desired frequency for the execution of orders
- make a profit
- maximize the number of units in the currency
- volatility

5 basic methods of investing, splitted in 3 groups, are analyzed.

The first method is the <a href="../btcusd-dca" target="_blank">dollar-cost averaging</a>.
The investment is uniform and periodic, both amount and frequency are determined in advance.

The 2 following methodes are derived from the <a href="../btcusd-dva" target="_blank">dollar-value averaging</a>.
The investment is period and it is not uniform. The amount of purchases depend on the current value of the investment compared to a predetermined target.  
In the first version, the sales are not allowed. In the second version, the sales of moneros are authorized. 

The last method is a single payment of money, the <a href="../btcusd-lumpsum" target="_blank">lump-sum investing</a>. We present the case for which the investment is made at the beginning of the year, and the case for which the investment is made in the middle of the year.


# Definitions

 ## Investment methods

- **dca** = dollar-cost averaging, 50 USD invested in monero every Tuesday

- **dva (no withdraw)** = dollar-value averaging, without the possibility to sell, adjusted amount of USD invested in monero every Tuesday in order to have an amount of moneros that equals 2600 USD at the end of the year

- **dva (full)** = dollar-value averaging with the possibility to go long/short, adjusted amount of USD invested in monero every Tuesday in order to have an amount of moneros that equals 2600 USD at the end of the year

- **lump-sum** =  2600 USD invested on Tuesday of the first week of the year

- **lump-sum mid-year** = 2600 USD invested on Tuesday of the 27<sup>th</sup> week of the year

## Indicators

- sharpe = the [Sharpe ratio](https://en.wikipedia.org/wiki/Sharpe_ratio), the annual return of the value of the crypto portfolio added to the realized profit if any (in case of the DVA with the full adjustment) over the annualized standard deviation of the daily returns

- drawdown = the [Max drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics)), the maximum decrease of the value of the portfolio during the year

- xmr = the **Accumulated moneros**, the number of moneros still hold in the portfolio at then end of the year

- **profit** = the difference between the value of the investment in monero (+ the realized profit) and the cash that would be held on a banking account instead

- **expenses** =  the total amount invested in USD for the purchases of the moneros

- **realized profit** = the cash withdrawn from the sales of the moneros (in case of the full adjustment that occurs with the DVA)


# Matrix of statistics

{{< graph-xmrusd-resume >}}

# Details by year

The historical prices of Monero do not follow a straight line. We cannot find an overall trend that could be recognized in a single year. Overall it is up, but there is no certainty that every investor can be convinved they buy it at a right price.
Take a look at the trend by year:
- 2015: neutral
- 2016: volatile and very up
- 2017: very up
- 2018: very down
- 2019: neutral
- 2020: up and steady

Statiscally, the *DVA* method, with no possibility to withdray any fund, is superior to others. The number of accumulated moneros is the most often higher than for other mehods while keeping the price of acquisition lower. **The drawback is that the investor does not control the expenses**.

The *lump-sum investing* presents decent sharpes and a very good non-realized profit. But as expected, it follows strictly the price of monero, that has not been steady over the years, as written earlier. **The investors needs to have faith in the purpose of the underlying in order to avoid a sale**.

The ***DCA* is a very reasonable investing method for Monero**. The expenses are well controlled by definition, while the average price of acquisition does not present a missing opportunity as the volatility of the crypto currency can be significant.

{{< graph-xmrusd-resume-byyear >}}