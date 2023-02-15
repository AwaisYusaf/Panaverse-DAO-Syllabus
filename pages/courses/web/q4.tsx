import CoursePageLayout from "../../../components/CourseLayout";
function QuarterFour() {
  return (
    <CoursePageLayout>
      <div className="mt-4 w-full flex flex-col items-center">
        <h1 className="my-4 font-semibold mb-8">Quarter IV</h1>
        <div className="lg:w-11/12 w-full flex lg:ml-0 ml-12 lg:flex-row flex-col-reverse justify-between">
          <h1 className="font-bold text-2xl lg:w-3/4">
            W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
          </h1>
          <p className="text-red-700">
            Duration: <span className="font-bold">13 weeks</span>
          </p>
        </div>
        <div className="w-11/12 flex flex-col lg:ml-0 ml-6">
          <h2 className="underline mt-6 text-lg font-semibold">
            Course description:
          </h2>
          <p>
            In this course you will learn how to develop Web 3.0 DApps, create a
            project, deploy it in production, write smart contracts, unit test
            them, and create user interfaces for them. We will also learn to
            develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that
            in order to develop Web 3 applications you also need to build on top
            of Web 2.0 technologies which we have already covered in the
            previous quarters.
            <a
              className="underline text-blue-900 ml-1"
              href="https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db"
            >
              (Visit)
            </a>
          </p>
          <h2 className="underline mt-6 text-lg font-semibold">
            Course Outline:
          </h2>
        </div>
        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">
            1. Blockchain and Metaverse Theory
          </h3>
          <div className="flex items-center">
            <p>
              The Metaverse: And How It Will Revolutionize Everything by Matthew
              Ball
            </p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0"
            >
              (Visit)
            </a>
          </div>
          <div className="flex items-center">
            <p>Mastering Blockchain - Fourth Edition by Imran Bashir</p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067"
            >
              (Visit)
            </a>
          </div>
        </div>

        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">
            2. Smart Contract Development in Solidity
          </h3>
          <div className="flex items-center">
            <p>
              Solidity Programming Essentials - Second Edition By Ritesh Modi
            </p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181"
            >
              (Visit)
            </a>
          </div>
          <div className="flex items-center">
            <p>Solidity Learning Repo</p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://github.com/panaverse/defi-dapps-solidity-smart-contracts"
            >
              (Visit)
            </a>
          </div>
        </div>

        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">
            3. Dapp Development using Ethers.js and Next.js 13
          </h3>
          <div className="flex items-center">
            <p className="lg:w-3/4">
              Dapp Learning Repo
              <a
                className="underline text-blue-900 ml-1"
                href="https://github.com/panaverse/dapps-nextjs"
              >
                (Visit)
              </a>
            </p>
          </div>
        </div>

        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">4. Tokenomics</h3>
          <div className="flex items-center">
            <p>API Routes</p>
            <a
              className="underline text-blue-900 ml-1"
              href="https://nextjs.org/docs/api-routes/introduction"
            >
              (Visit)
            </a>
          </div>
        </div>

        <div className="w-10/12 flex flex-col">
          <h3 className="mt-6 text-lg font-semibold">
            5. Blockchain Project: Create a Token and Launch ICO/IEO/IDO
          </h3>
          <p>
            <p>
              {" "}
              As you probably know, the ICO (Initial Coin Offering) industry has
              been booming, and its completely reinventing the way new startups
              kickstart themselves. In fact, have a look at Wikipedias list of
              highest crowdfunding projects
              https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects,
              and you will notice that blockchain projects absolutely dominate
              the list.
            </p>

            <p>
              Understand the difference between IDO vs. IEO vs. ICO
              https://phemex.com/blogs/what-is-a-dex-ido
            </p>

            <p>Also check these links for latest listings:</p>

            <p>ICO list at ICO Drops https://icodrops.com</p>
            <p>
              ICO List of Best New Initial Coin Offerings
              https://topicolist.com/
            </p>
            <p>
              Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and
              IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and
              IDOs https://cryptototem.com/ico-list/
            </p>

            <p>ICO List Online https://www.icolistingonline.com</p>
            <p>Binance IEO List https://coincodex.com/ieo-list/binance/</p>
            <p>
              Binance Launchpad
              https://www.coinspeaker.com/ieo/platform/binance-launchpad/
            </p>

            <p>IEO List https://icomarks.com/ieo</p>
            <p>Polkastarter https://polkastarter.com</p>
            <p>Project Part 1: How to Launch a IEO on Binance Launchpad</p>

            <p>
              {" "}
              Read How to Launch an IEO
              https://appinventiv.com/blog/how-to-launch-an-ieo/
            </p>

            <p>
              Your first task of the project is to make a google slides
              presentation on how to start a IEO on the Binance Launch Pad
              https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04
            </p>

            <p>Note: Also document the alternatives to Binance Launchpad.</p>
            <p>Project Part 2: How to Launch a IDO on Polkastarter</p>

            <p>
              Review the [list of top fundraising platforms
              https://cryptorank.io/fundraising-platforms
            </p>

            <p>
              Your second task of the project is to make a google slides
              presentation on how to start a IDO on the Polkastarter
              https://polkastarter.com/
            </p>

            <p>Project Part 3: Create a Pako Token</p>
            <p>
              By creating a token and related contracts, you will also learn how
              to handle money sent to your contracts, which should come in handy
              if you want to create some kind of paid decentralized service in
              the future.
            </p>
            <p>
              Therefore, for the sake of this chapter, lets imagine that our
              Pako DApp uses its own coin – the Pako Token. We will create two
              contracts – one for the token itself and one for the token crowd
              sale (the ICO).
            </p>
            <p>
              Now Create your own Pako ERC20 Token and deploy it on a testnet.
              The Token should be to use OpenZeppelin contracts. You will use
              the Hardhat development environment. Also, write at least twenty
              automated tests. We will be using Solidity and Typescript for
              development.
            </p>

            <p>Project Part 4: Develop Crowd Sale Contract</p>

            <p>
              This contract will be responsible for allowing users to exchange
              ETH for our Pako Token. In order to do that we need to set a price
              for our token (1 ETH = 100 Pako Token)
            </p>

            <p>Implement a payable buyToken() function.</p>
            <p>
              Emit a BuyTokens event that will log who’s the buyer, the amount
              of ETH sent and the amount of Token bought
            </p>
            <p>
              Transfer 75% of the Tokens to the Crowd Sale contract at
              deployment time. i.e. Right after the contract is deployed, we
              want the token contract to send 75% of our token supply to it.
              While 25% remain in our personal owner account.
            </p>

            <p>
              Transfer the ownership of the Crowd Sale contract (at deploy time)
              to our frontend address so that we are able to withdraw the ETH.
            </p>

            <p>
              You can use the openzeppelin crowd sale contracts
              https://docs.openzeppelin.com/contracts/4.x/crowdsales however you
              will have to update the code to the latest solidity version.
            </p>

            <p>
              Also write extensive tests, for example we will simply send a
              transaction of 1 ETH from a random account to the contract. After
              the transaction, we should expect the account to have received
              Pako, while the contracts balance should have been reduced.
            </p>
            <p>
              Note: Before you get started writing the token contract we suggest
              you review the access control
              https://docs.openzeppelin.com/contracts/4.x/access-control
            </p>

            <p>Project Part 5: Trying it with MetaMask</p>
            <p>
              While its always good to test your code, its often more satisfying
              to see the results of your work wrapped in a nice UI. Lets see how
              we can deploy our contracts and get some Pako tokens into our
              MetaMask wallet!
            </p>
            <p>
              We start by running our deployment scripts for the test network so
              that the new token contracts are uploaded and deployed.
            </p>

            <p>
              When its done, take note of what addresses the contracts were
              uploaded to and copy it!
            </p>

            <p>
              Now head to MetaMask, and send a transaction of 1 ETH to the crowd
              sale contract address. If your MetaMask wallet does not have any
              ethers, remember that you can use any faucet.
            </p>
            <p>
              After the transaction has been confirmed, you might be confused
              about why you can not see any tokens in your wallet. It turns out
              that you need to manually add the token address in MetaMask in
              order to (register) it – after all, there are so many tokens out
              there, there is no way MetaMask could list them all by default!
            </p>

            <p>
              To do this, open the side menu and click on the (Add token) button
              to get started:
            </p>

            <p>
              Once you are on the token page, click on (Add custom token) and
              paste in the token contracts address in the address field.
            </p>

            <p>
              After confirming that you want to add the token, you should be
              able to see your Pako balance right next to your ETH balance in
              the wallet. How cool!
            </p>

            <p>Project Part 6: Trying it with Multisignature Wallets</p>
            <p>
              Read
              https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-yo
              ur-coins-safer-if-you-use-them-right/
            </p>

            <p>
              Now use Gnosis Safe https://gnosis-safe.io/ with multi-sigs to do
              what you did in the last part.
            </p>

            <p>Project Part 7: Sending Tokens using Ethers.js</p>

            <p>
              Write a Typescript program to send Pako Token to some friends
              address using Ethers.js.
            </p>

            <p>
              You may follow this tutorial
              https://ethereum.org/en/developers/tutorials/send-token-etherjs/
            </p>

            <p>Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT</p>

            <p>
              Read this NFT tutorial series
              https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/
            </p>

            <p>
              Create a NFT contract using the OpenZepplen ERC721 NFT Standard
              https://docs.openzeppelin.com/contracts/4.x/erc721
            </p>

            <p>
              You may use the Preset ERC721 contract
              https://docs.openzeppelin.com/contracts/4.x/erc721#Presets
            </p>

            <p>
              Deploy your NFT contract on a testnet, mint it, and view it on the
              MetaMask wallet and list it on OpenSea Marketplace
              https://opensea.io/ for sale.
            </p>

            <p>
              Implement a ERC721 Market
              https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-mar
              ket/
            </p>
          </p>
        </div>
      </div>
    </CoursePageLayout>
  );
}

export default QuarterFour;
