---
title: Intro to Kleros
subtitle: Taking a quick understanding of Kleros
createdOn: 15/10/2023
---

Before we delve into the intro, let's imagine a scenario.

Tom , who's a web developer, is working on contract for Jerry. Jerry asked Tom to make a website.
Tom and Jerry , make an escrow smart contract, and Jerry deposits the money (let's assume 1 Eth). Tom is supposed to deliver the website after which his funds will be released from the contract.

<img src="https://i.imgur.com/hYdj85J.jpg" alt="tom&jerry"  width="50%" height="30%">

But we know Tom , he doesn't like Jerry, so he doesn't deliever on the site.
Now what can Jerry do to get his money back?
If the escrow contract was created and managed by a 3rd party , he might try ask them to release his funds. But what if the 3rd party is malicious, there's no way to know if Tom hasn't bribed them.

But Jerry is smart, he used **Kleros's** arbitrable contract while making the escrow contract. Now Jerry can just raise a dispute, after which the decentralised trustless [Kleros court](https://court.kleros.io/) will decide whom the money will go to.

## So, what is Kleros? 👨🏻‍⚖️

<img src="https://i.imgur.com/WSjz5bx.jpg"  width="50%" height="30%">

Kleros is a justice as a service platform. Based on web3 , Kleros provides **decentralised justice**, which can be enforceable in numerous ways.
It provides a platform to submit disputes, which are put on trial and jurors analyse the evidence and put in there ruling.
So, Kleros acts as a 3rd party platform to resolve disputes regarding smart contract platforms.
Kleros uses **Pinakion**, an ERC20 token to facilitate their operations.

### How do they achieve that? 🤔

At its core the protocol is based on the game theory, [Focal Point or Schelling point](https://en.wikipedia.org/wiki/Focal_point_%28game_theory%29).
Introduced by Thomas Schelling in his book _The strategy of conflict_, it states

> People can often concert their intentions or expectations with others if each knows that the other is trying to do the same

So, Jurors vote for the outcome that they think the majority will choose, since failing to do so will result in loss of their staked token.

### Can't Tom bribe the jurors or launch a 51% attack? 🧨

Let's take a scenario where Tom does bribe the jurors and wins the dispute.
In such case, Jerry can put in an appeal and now the new dispute will have **(2n + 1) Jurors**, doubling the initial number of jurors.
Now, Tom cannot keep bribing the jurors as it will be very expensive in each subsequent dispute, eventually loosing him more money.

For the next scenario, where Tom buys 51% of tokens and make numerous Juror accounts to rule in his favour.

Let's say Tom goes to buy 51% of total supply of **PNK** token, as he keeps on buying the value of PNK Token will keep increasing as a result of supply demand inbalance, so by the time he reaches 51% , each PNK Token will cost him a fortune.

Assuming Tom is Bill Gate's cat and manages to buy 51% token, the community will eventually know about this and the platform will loose its credibility and the tokens will loose their value, thus removing Bill Gate's from the richest person list all because of Tom .

<img src="https://i.imgur.com/DdVHA2f.jpg"  width="50%" height="30%">

### Conclusion

Kleros provides a decentralised platform to take your disputes to.
It finds applications in various industries ranging from Insurance, Oracle data, Escrow's,
Curated Lists, Governor, etc.

### More on Kleros 🔗

Kleros provides a comprehensive documentation to integrate.
[Kleros](https://kleros.io/) || [Docs](https://docs.kleros.io/) || [Integration](https://docs.kleros.io/integrations/overview)

> I made a dApp that uses Kleros as Arbitration service.
> [RuleBook](https://rule-book.vercel.app/) that defines Rules for the community, by the community. Do take insipiration and #buidl something beautiful with Kleros.
