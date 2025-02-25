---
title: Pine Healthcare Whitepaper Draft
author: TED Vortex
date: '2021-03-17T00:00:00.000Z'
draft: false
tags:
  - open source
  - engineering
  - health
  - vc
comments: {}
---

## HL7 FHIR

Health Level Seven or HL7 refers to a set of international standards for transfer of clinical and administrative data between software applications used by various healthcare providers. These standards focus on the application layer, which is "layer 7" in the OSI model. The HL7 standards are produced by Health Level Seven International, an international standards organization, and are adopted by other standards issuing bodies such as American National Standards Institute and International Organization for Standardization.

Hospitals and other healthcare provider organizations typically have many different computer systems used for everything from billing records to patient tracking. All of these systems should communicate with each other (or "interface") when they receive new information, or when they wish to retrieve information, but not all do so.

HL7 International specifies a number of flexible standards, guidelines, and methodologies by which various healthcare systems can communicate with each other. Such guidelines or data standards are a set of rules that allow information to be shared and processed in a uniform and consistent manner. These data standards are meant to allow healthcare organizations to easily share clinical information. Theoretically, this ability to exchange information should help to minimize the tendency for medical care to be geographically isolated and highly variable.

You can read more on:

- [Wikipedia](https://en.wikipedia.org/wiki/Health_Level_7)
- [Dental Data Exchange](https://confluence.hl7.org/display/FHIR/Dental+Data+Exchange)
- [FHIR Codesystem](https://www.hl7.org/fhir/codesystem-tooth.html)

## Electronic Health Records Services

In practice the complexity of the standard and existing health care real life demands and regulations produced a new market niche dedicated to interoperability and FHIR implementations on top of existing software management systems.

While the highlighted products and companies are in no way affiliated to this paper, they represent various solutions to the interoperability layer **without** enabling the user to own any of his data and medical records:

- [Gemms](https://gemmsone.com/index.php?option=com_content&view=article&id=807&Itemid=552)
- [Oracle SOA](https://www.oracle.com/middleware/technologies/soasuite.html)
- [CloverLeaf](https://www.infor.com/products/cloverleaf)
- [Magic](https://www.magicsoftware.com/integration-solutions/healthcare/)
- [CareAware](https://www.cerner.com/pages/careaware)
- [Change Healthcare](https://www.changehealthcare.com/solutions/clinical-network#sort=relevancy&numberOfResults=12)
- [CorePoint](https://www.lyniate.com/corepoint/benefits/)
- [Qvera](https://www.qvera.com/hl7-interface-engine/)
- [NexHealth](https://www.nexhealth.com/for/operations)
- [Definitive Healthcare](https://www.definitivehc.com/platform#databases)
- [Redox](https://www.redoxengine.com/product/)

## Pine Motivation

The solution described as Pine is motivated by the fact that open access to patient health records is difficult even when using the vast majority of existing solutions and in similar percentage, centralised.

When technology is centralized, it typically means that it is controlled and run by a single company, government, or individual. Decentralized technology on the other hand, is run by a network of participants that no one actor can control or shut down. Here are some benefits of decentralization:

1. **Users don’t have to put trust in a central authority.** We trust companies and governments with our information and money all the time, and it is completely ok to make these decisions on a case by case basis. But we see plenty of examples where this trust lets us down to varying degrees, ranging from the product that you trusted to backup all your photos getting shut down when the startup gets bought or goes out of business, to the social media company selling your data to advertisers who follow you around the internet. In a well designed decentralized network, you should be able to reduce or eliminate the trust that you’re required to put into third parties.
1. **There is less likely to be a single point of failure.** We see single points of failure all the time in the form of outages of centralized web sites. Gmail goes down and productivity halts as you can’t get your email. Your bank’s web site shuts down for maintenance and you can’t do an online transfer to pay your bills. In decentralized networks, no one node going down can take down the entire network, so no matter how many users come and go, your applications should remain up and running.
1. **There is less censorship.** It is becoming increasingly common that governments shut down their citizens’ access to social media, as they attempt to censor reports of what is going on internally. It is easy for them to shut down access to Twitter, as all they have to do is stop traffic going to Twitter’s central servers. But it is far more difficult for them to censor traffic on a peer to peer network, in which every single outbound packet being sent could be communicating with another peer on the decentralized network, who can then forward that message along.
1. **Decentralized networks are more likely to be open development platforms.** This means that anyone can build amazing tools, products, and services on top of decentralized networks. Contrast this with centralized technology which is more often closed off with intentionally limited development opportunities. Open and decentralized doesn’t mean that companies can’t make money. In fact, it means the opposite, as the more great products and tools that are built, the larger the network effects are locking users into the network, and therefore the more opportunities to build great businesses on top. The world wide web itself is a great example of an open network, in which many great businesses such as Amazon, found opportunities to grow enormously due to the network effects of all the great things being built on top of the network.
1. **There is potential for network ownership alignment.** This is the idea that the people who contribute value to a decentralized network receive ownership or economic stake in the network, that becomes more valuable as the network grows. This is one of the most exciting things that blockchain technology brings to decentralized networks, as it allows economics to be designed into the networks themselves, to create the right incentives for early participants to become powerhouse evangelists and value-contributing users. Contrast this to a centralized network where only the company controlling the network receives value as the network grows, and you can see why it’s exciting for users to participate in a decentralized network.
1. **Decentralized networks can be more meritocratic.** The best product, service, or content should be more likely to be recognized and rewarded over time when everyone is playing by the same, transparent rules. If traffic, attention, and economics are distributed instead behind a closed, centralized algorithm, it’s possible that the system is less meritocratic.

One application of public ledgers is the ability to verify identity. In a nutshell, a verifiable credential is a piece of information that a third party can validate digitally.

Verifiable Credentials is one of the most exciting and transformative areas of innovation. Verifiable Credentials and Decentralized Identifiers help you share your verifiable credentials without giving up your privacy. No one company or institution can control or store your information centrally — you can revoke your verifiable credentials at any time.

Clinical trial management is another area where blockchains can be of use. For instance, as more laboratories work with large molecules and compounds that originate from various place, an immutable record becomes indispensable for validating information associated to various stages of clinical trials especially when laboratories are located in different parts of the globe.

In the context of periodontology, multiple actors can verify existing datasets anonymously as well as all the open source code and implementations and we can also apply multiple forms of assisted intelligence to the data sets. While iniatially we are deploying a bias detection and learning algorithm to focus on the researched levels, once the anonimity layer is audited we can apply reinforcement learning to multiple areas impacting user experience.

Leveraging open access technologies, providers and standards we can give end users complete control over:

- their data and identity
- the way their medical records are used
- which entities can access your information
- which periodontology model to use (insert pine research reference)
- the location where your data is stored (private blockchain, interplanetary file systems)

## High level architecture

### My Pine Care

Main domain for social interactions and public storefront.

This application is designed to act as a documentation and research centralised hub for all the tools.

### Pine Dental

[React Native](https://reactnative.dev) open source cross platform client deployed to web, portable ios and android, desktop windows, ubuntu and apple.

This application is designed to act as a periodontology assistant and research tool.

### Pine Access

De-facto blockchain identity verification and credentials management bridge. Assessment of existing technologies and implementation pending but one implementation quirk of this is the [Web3](https://web3js.readthedocs.io/en/v1.3.4/) backend being plugabble to sidechains and private organisations.

This application is designed to act as a tool to manage access to your private information and records.

### Pine Backup

De-facto blockchain storage solution through [IPFS](https://ipfs.io). Full access to the storage component is enabled from application launch, however the stability of decentralised solutions, platform, global security and data regulations concerns require this layer to be open to public audit and extension.

This application is designed to act as a data integrity and encryption solution for all your data spread across public or public chains.
