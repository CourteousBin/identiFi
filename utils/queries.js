// 从 index.js 文件中导入 contract 模块
import { contract } from './index';

// 解析错误信息的函数
function parseErrorMsg(e) {
  // 将错误对象转换为 JSON 格式，以便安全地访问其属性
  const json = JSON.parse(JSON.stringify(e));
  // 返回错误的原因或错误消息
  return json?.reason || json?.error?.message;
}

// 根据用户地址获取用户名的异步函数
export async function getUsernameByAddress(userAddress) {
  try {
    // 获取合约对象
    const contractObj = await contract();

    // 调用合约方法获取用户名
    const username = await contractObj.getUsernameByAddress(userAddress);
    return username; // 返回用户名
  } catch (err) {
    console.log(err); // 打印错误
    return parseErrorMsg(err); // 返回解析后的错误信息
  }
}

// 创建用户的异步函数
export async function createUser(
  username,
  basicInfo,
  professionalInfo,
  socialLinks,
  visibility
) {
  try {
    // 获取合约对象
    const contractObj = await contract();
    // 调用合约方法创建用户
    const transactionResponse = await contractObj.createUser(
      username,
      basicInfo,
      professionalInfo,
      socialLinks,
      visibility
    );
    // 等待交易确认
    const receipt = await transactionResponse.wait();
    return receipt; // 返回交易收据
  } catch (e) {
    console.error("Error in createUser:", e); // 打印错误信息
    return parseErrorMsg(e); // 返回解析后的错误信息
  }
}

// 编辑用户信息的异步函数
export async function editUser(
  username,
  basicInfo,
  professionalInfo,
  socialLinks,
  visibility
) {
  try {
    // 获取合约对象
    const contractObj = await contract();
    // 调用合约方法编辑用户
    const transactionResponse = await contractObj.editUser(
      username,
      basicInfo,
      professionalInfo,
      socialLinks,
      visibility
    );
    // 等待交易确认
    const receipt = await transactionResponse.wait();
    return receipt; // 返回交易收据
  } catch (e) {
    console.error("Error in editUser:", e); // 打印错误信息
    return parseErrorMsg(e); // 返回解析后的错误信息
  }
}

// 根据用户名获取用户信息的异步函数
export async function getUserByUsername(username) {
  try {
    // 获取合约对象
    const contractObj = await contract();
    // 调用合约方法获取用户信息
    const user = await contractObj.getUserByUsername(username);
    // 返回用户的基本信息、专业信息、社交链接和可见性
    return {
      basicInfo: {
        firstName: user.basicInfo.firstName,
        lastName: user.basicInfo.lastName,
        email: user.basicInfo.email,
        homeAddress: user.basicInfo.homeAddress,
        dateOfBirth: user.basicInfo.dateOfBirth,
        phoneNumber: user.basicInfo.phoneNumber,
      },
      professionalInfo: {
        education: user.professionalInfo.education,
        workHistory: user.professionalInfo.workHistory,
        jobTitle: user.professionalInfo.jobTitle,
        info: user.professionalInfo.info,
        skills: user.professionalInfo.skills,
        imageURL: user.professionalInfo.imageURL,
      },
      socialLinks: {
        x: user.socialLinks.x,
        instagram: user.socialLinks.instagram,
        tiktok: user.socialLinks.tiktok,
        youtube: user.socialLinks.youtube,
        linkedin: user.socialLinks.linkedin,
      },
      visibility: {
        education: user.visibility.education,
        workHistory: user.visibility.workHistory,
        phoneNumber: user.visibility.phoneNumber,
        homeAddress: user.visibility.homeAddress,
        dateOfBirth: user.visibility.dateOfBirth,
      },
    };
  } catch (e) {
    console.error("Error in getUserByUsername:", e); // 打印错误信息
    return parseErrorMsg(e); // 返回解析后的错误信息
  }
}

// 根据用户地址获取用户信息的异步函数
export async function getUserByAddress(userAddress) {
  try {
    // 获取合约对象
    const contractObj = await contract();
    // 调用合约方法获取用户信息
    const user = await contractObj.getUserByAddress(userAddress);
    // 返回用户的基本信息、专业信息、社交链接和可见性
    return {
      basicInfo: {
        firstName: user.basicInfo.firstName,
        lastName: user.basicInfo.lastName,
        email: user.basicInfo.email,
        homeAddress: user.basicInfo.homeAddress,
        dateOfBirth: user.basicInfo.dateOfBirth,
        phoneNumber: user.basicInfo.phoneNumber,
      },
      professionalInfo: {
        education: user.professionalInfo.education,
        workHistory: user.professionalInfo.workHistory,
        jobTitle: user.professionalInfo.jobTitle,
        info: user.professionalInfo.info,
        skills: user.professionalInfo.skills,
        imageURL: user.professionalInfo.imageURL,
      },
      socialLinks: {
        x: user.socialLinks.x,
        instagram: user.socialLinks.instagram,
        tiktok: user.socialLinks.tiktok,
        youtube: user.socialLinks.youtube,
        linkedin: user.socialLinks.linkedin,
      },
      visibility: {
        education: user.visibility.education,
        workHistory: user.visibility.workHistory,
        phoneNumber: user.visibility.phoneNumber,
        homeAddress: user.visibility.homeAddress,
        dateOfBirth: user.visibility.dateOfBirth,
      },
    };
  } catch (e) {
    console.error("Error in getUserByAddress:", e); // 打印错误信息
    return parseErrorMsg(e); // 返回解析后的错误信息
  }
}

// 获取用户申请的所有职位 ID 的异步函数
export async function getJobs(username) {
  try {
    // 获取合约对象
    const contractObj = await contract();
    // 调用合约方法获取职位 ID
    const jobIds = await contractObj.getJobs(username);
    // 将职位 ID 转换为字符串数组并返回
    return jobIds.map((jobId) => jobId.toString());
  } catch (e) {
    console.error("Error in getJobs:", e); // 打印错误信息
    return parseErrorMsg(e); // 返回解析后的错误信息
  }
}

// 设置用户信息可见性的异步函数
export async function setVisibility(
  username,
  education,
  workHistory,
  phoneNumber,
  homeAddress,
  dateOfBirth
) {
  try {
    // 获取合约对象
    const contractObj = await contract();
    // 调用合约方法设置可见性
    const transactionResponse = await contractObj.setVisibility(
      username,
      education,
      workHistory,
      phoneNumber,
      homeAddress,
      dateOfBirth
    );
    // 等待交易确认
    const receipt = await transactionResponse.wait();
    return receipt; // 返回交易收据
  } catch (e) {
    console.error("Error in setVisibility:", e); // 打印错误信息
    return parseErrorMsg(e); // 返回解析后的错误信息
  }
}

// 获取用户信息可见性的异步函数
export async function getVisibility(username) {
  try {
    // 获取合约对象
    const contractObj = await contract();
    // 调用合约方法获取可见性信息
    const visibility = await contractObj.getVisibility(username);
    // 返回可见性信息
    return {
      education: visibility.education,
      workHistory: visibility.workHistory,
      phoneNumber: visibility.phoneNumber,
      homeAddress: visibility.homeAddress,
      dateOfBirth: visibility.dateOfBirth,
    };
  } catch (e) {
    console.error("Error in getVisibility:", e); // 打印错误信息
    return parseErrorMsg(e); // 返回解析后的错误信息
  }
}
