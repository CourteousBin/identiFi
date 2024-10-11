
<div align="center">
  <br />
    <a href="https://www.youtube.com/watch?v=OpL5Q7Zc7qk" target="_blank">
      <img src="https://i.postimg.cc/26LnpVqZ/test1-copy.jpg" alt="项目横幅">
    </a>
  
  <br />

  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">
    <a href="https://bingodev.netlify.app/" target="_blank"><b>identiFi</b></a>
  </h3>
</div>

## <a name="introduction">🤖 介绍</a>

identiFi 利用区块链技术将用户身份信息安全地存储在区块链上，从而构建一个统一、安全且可验证的区块链身份证

## <a name="tech-stack">⚙️ 技术栈</a>

- Next.js
- TypeScript
- Solidity
- Hardhat
- Chainlink VRF
- IPFS

## <a name="features">🔋 特性</a>

- **去中心化标识符 (DIDs)：** 在区块链上创建和管理唯一的 DIDs。
- **身份验证：** 提交身份文件以供可信第三方验证。
- **凭证验证：** 验证凭证的真实性。
- **用户个人资料管理：** 轻松更新个人信息和管理凭证。
- **隐私控制：** 控制谁可以访问身份信息以及在何种情况下访问。
- **安全措施：** 强大的安全措施，包括加密和安全密钥管理。
- **社交媒体集成：** 在各种社交媒体平台上分享您的验证数字身份。
- **个人资料编辑：** 轻松更新和管理您的数字身份资料。


### 关键功能

- **createUser：** 创建新的用户资料，并使用 Chainlink VRF 请求新的 DID。
- **editUser：** 编辑现有用户资料。
- **getUserByUsername：** 通过用户名检索用户信息。
- **getUserByAddress：** 通过地址检索用户信息。
- **addJob：** 向用户资料添加工作。
- **getJobs：** 检索与用户相关的工作。
- **setVisibility：** 设置用户资料信息的可见性偏好。
- **getVisibility：** 获取用户资料信息的可见性偏好。
- **batchCreateUsers：** 使用 Monobean 批量创建多个用户资料。

## <a name="storing-images-on-ipfs">🖼️ 在 IPFS 上存储图像</a>

用户图像被上传并存储在 IPFS 上。这确保图像以去中心化的方式存储，从而增强安全性和可访问性。


## <a name="quick-start">🤸 快速开始</a>

按照以下步骤在您的机器上本地设置项目。

**先决条件**

确保您的机器上已安装以下软件：

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/)
- Metamask（或其他以太坊钱包）
- Chainlink VRF 设置
- IPFS 设置

**克隆仓库**

```bash
git clone git@github.com:CourteousBin/identiFi.git
```

**安装依赖**

使用 npm 安装项目依赖：

```bash
npm install
```

**编译合约**

```bash
npx hardhat compile
```

**部署合约**

```bash
npx hardhat run scripts/deploy.js --network yourNetwork
```

**运行开发服务器**

```bash
npm start
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看项目。

## <a name="smart-contract-overview">🕸️ 智能合约概述</a>

主合约 `IdentiFi` 管理用户资料、DIDs 和凭证。


原作者：
Build this project step by step with our detailed tutorial on <a href="https://www.youtube.com/@albertmends" target="_blank"><b>Your YouTube Channel</b></a>. Join the community!
