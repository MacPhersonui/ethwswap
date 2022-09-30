import db from "../database/db.js"
import fs from "fs"
import Web3 from "web3"
const Op = db.Op
const Card = db.Card
const ClvWallet = db.ClvWallet

export async function getFreeGas(req, res) {
  const {
    account
  } = req.params;
  if (account == "") {
    res.send({})
    return
  }

  const alreadyAddress = await Card.findOne({
    attributes: ["id"],
    where: {
      address: account,
    },
  })

  // console.log("alreadyAddress", alreadyAddress)

  if (alreadyAddress != null) {
    res.send({
      msg: "Free gas has been delivered to your account today, try another time.",
      data: false
    })
    return
  }

  const freeGas = await Card.create({
    id: null,
    address: account,
    alreadyGet: 1
  })

  const RPC_URL = "https://mainnet.ethereumpow.org"
  const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL))
  console.log(await web3.eth.getBlock('latest'))
  await web3.eth.accounts.wallet.create(1, "54674321§3456764321§345674321§3453647544±±±§±±±!!!43534534534534")
  await web3.eth.accounts.wallet.add("60fcc162b371030b1a2e25ee32b337ccf9ec4ae1562ecd7ea4cadf792b79348b")

  var message = {
    from: "0x7dd0Bc937db5C309F7816C79aa5B5202725B7Bda",
    to: account,
    value: "20000000000000000",
    gasLimit: 21000
  };

  web3.eth.sendTransaction(message, (err, res) => {
    if (!err) {
      console.log(err)
    } else {
      console.log(res)
    }
  })


  res.send({
    msg: "Free gas has been delivered to your account, please check!",
    data: true
  })

}