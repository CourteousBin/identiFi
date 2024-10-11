// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IdentiFi {
    // 用户结构体，存储用户的基本信息、专业信息、社交链接等
    struct User {
        string firstName; // 名字
        string lastName; // 姓氏
        string username; // 用户名
        string email; // 电子邮件
        string homeAddress; // 家庭地址
        string dateOfBirth; // 出生日期
        string education; // 教育背景
        string workHistory; // 工作经历
        string phoneNumber; // 电话号码
        string jobTitle; // 职位
        string x; // 社交媒体链接（例如 x）
        string tiktok; // TikTok链接
        string instagram; // Instagram链接
        string youtube; // YouTube链接
        string linkedin; // LinkedIn链接
        string info; // 其他信息
        string[] skills; // 技能列表
        string imageURL; // 头像URL
        bool exists; // 用户是否存在
        uint[] appliedJobs; // 申请的工作列表
        Visibility visibility; // 可见性设置
    }

    // 可见性结构体，定义哪些信息是可见的
    struct Visibility {
        bool education; // 教育背景可见性
        bool workHistory; // 工作经历可见性
        bool phoneNumber; // 电话号码可见性
        bool homeAddress; // 家庭地址可见性
        bool dateOfBirth; // 出生日期可见性
    }

    // 基本信息结构体
    struct BasicInfo {
        string firstName; // 名字
        string lastName; // 姓氏
        string email; // 电子邮件
        string homeAddress; // 家庭地址
        string dateOfBirth; // 出生日期
        string phoneNumber; // 电话号码
    }

    // 社交链接结构体
    struct SocialLinks {
        string x; // 社交媒体链接（例如 x）
        string tiktok; // TikTok链接
        string instagram; // Instagram链接
        string youtube; // YouTube链接
        string linkedin; // LinkedIn链接
    }

    // 专业信息结构体
    struct ProfessionalInfo {
        string workHistory; // 工作经历
        string education; // 教育背景
        string jobTitle; // 职位
        string info; // 其他信息
        string[] skills; // 技能列表
        string imageURL; // 头像URL
    }

    // 存储用户信息的映射
    mapping(string => User) private users; // 通过用户名查找用户
    mapping(address => string) private addressToUsername; // 通过地址查找用户名
    mapping(string => bool) private usernames; // 存储已注册的用户名

    // 修饰符，确保用户名唯一
    modifier onlyUniqueUsername(string memory username) {
        require(!usernames[username], "Username already exists");
        _;
    }

    // 创建用户函数
    function createUser(
        string memory username,
        BasicInfo memory basicInfo,
        ProfessionalInfo memory professionalInfo,
        SocialLinks memory socialLinks,
        Visibility memory visibility
    ) public onlyUniqueUsername(username) {
        User storage user = users[username];
        user.firstName = basicInfo.firstName;
        user.lastName = basicInfo.lastName;
        user.username = username;
        user.email = basicInfo.email;
        user.homeAddress = basicInfo.homeAddress;
        user.dateOfBirth = basicInfo.dateOfBirth;
        user.phoneNumber = basicInfo.phoneNumber;
        user.education = professionalInfo.education;
        user.workHistory = professionalInfo.workHistory;
        user.jobTitle = professionalInfo.jobTitle;
        user.x = socialLinks.x;
        user.instagram = socialLinks.instagram;
        user.tiktok = socialLinks.tiktok;
        user.youtube = socialLinks.youtube;
        user.linkedin = socialLinks.linkedin;
        user.info = professionalInfo.info;
        user.skills = professionalInfo.skills;
        user.imageURL = professionalInfo.imageURL;
        user.exists = true; // 标记用户已存在
        user.visibility = visibility; // 设置可见性
        usernames[username] = true; // 注册用户名
        addressToUsername[msg.sender] = username; // 将地址与用户名关联
    }

    // 根据用户名获取用户信息
    function getUserByUsername(
        string memory username
    )
        public
        view
        returns (
            BasicInfo memory basicInfo,
            ProfessionalInfo memory professionalInfo,
            SocialLinks memory socialLinks,
            Visibility memory visibility
        )
    {
        require(users[username].exists, "User does not exist."); // 检查用户是否存在
        User storage user = users[username];
        basicInfo = BasicInfo(
            user.firstName,
            user.lastName,
            user.email,
            user.homeAddress,
            user.dateOfBirth,
            user.phoneNumber
        );
        professionalInfo = ProfessionalInfo(
            user.workHistory,
            user.education,
            user.jobTitle,
            user.info,
            user.skills,
            user.imageURL
        );
        socialLinks = SocialLinks(
            user.x,
            user.instagram,
            user.tiktok,
            user.youtube,
            user.linkedin
        );
        visibility = user.visibility; // 获取可见性设置
        return (basicInfo, professionalInfo, socialLinks, visibility);
    }

    // 根据用户地址获取用户信息
    function getUserByAddress(
        address userAddress
    )
        public
        view
        returns (
            BasicInfo memory basicInfo,
            ProfessionalInfo memory professionalInfo,
            SocialLinks memory socialLinks,
            Visibility memory visibility
        )
    {
        string memory username = addressToUsername[userAddress]; // 获取用户名
        return getUserByUsername(username); // 调用获取用户信息的函数
    }

    function editUser(
        string memory username,
        BasicInfo memory basicInfo,
        ProfessionalInfo memory professionalInfo,
        SocialLinks memory socialLinks,
        Visibility memory visibility
    ) public {
        require(users[username].exists, "User does not exist.");
        User storage user = users[username];
        user.firstName = basicInfo.firstName;
        user.lastName = basicInfo.lastName;
        user.email = basicInfo.email;
        user.homeAddress = basicInfo.homeAddress;
        user.dateOfBirth = basicInfo.dateOfBirth;
        user.phoneNumber = basicInfo.phoneNumber;
        user.education = professionalInfo.education;
        user.workHistory = professionalInfo.workHistory;
        user.jobTitle = professionalInfo.jobTitle;
        user.x = socialLinks.x;
        user.instagram = socialLinks.instagram;
        user.tiktok = socialLinks.tiktok;
        user.youtube = socialLinks.youtube;
        user.linkedin = socialLinks.linkedin;
        user.info = professionalInfo.info;
        user.skills = professionalInfo.skills;
        user.imageURL = professionalInfo.imageURL;
        user.visibility = visibility;
    }

    // 根据地址获取用户名
    function getUsernameByAddress(
        address userAddress
    ) public view returns (string memory) {
        return addressToUsername[userAddress]; // 返回用户名
    }

    // 设置用户可见性
    function setVisibility(
        string memory username,
        bool education,
        bool workHistory,
        bool phoneNumber,
        bool homeAddress,
        bool dateOfBirth
    ) public {
        require(users[username].exists, "User does not exist."); // 检查用户是否存在
        User storage user = users[username];
        user.visibility.education = education;
        user.visibility.workHistory = workHistory;
        user.visibility.phoneNumber = phoneNumber;
        user.visibility.homeAddress = homeAddress;
        user.visibility.dateOfBirth = dateOfBirth;
    }

    // 获取用户可见性设置
    function getVisibility(
        string memory username
    ) public view returns (Visibility memory) {
        require(users[username].exists, "User does not exist."); // 检查用户是否存在
        return users[username].visibility; // 返回可见性设置
    }
}
