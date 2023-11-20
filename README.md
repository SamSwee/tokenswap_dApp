This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is a project created for the StackUp x DeFiChain Learn and Earn Campaign from 3 Nov to 17 Nov 2023. The smart contracts here are meant to be deployed on the MetaChain Testnet, of chain ID 1131.
![image](https://github.com/SamSwee/tokenswap_dApp/assets/12713419/8d93136e-767f-457e-ac0e-4f12f21e921a)

## Getting Started
1. First, ensure that you are using minimally Node v20.9. 
2. Second, ensure that your utils folder has the ABI of your tokens and the token swap contract.
3. Third, after deploying your token swap smart contract on Remix or hardhat, be sure to change the contract address in Swap.tsx

Once ready, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
