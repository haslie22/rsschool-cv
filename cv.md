# Lizaveta Dondysh

![Author's photo](./assets/photos/image.png)

## ✉️ Contact information

**Location:** Vilnius, Lithuania  
**Email:** [lizadondysh@icloud.com](mailto:lizadondysh@icloud.com)  
**GitHub:** [haslie22](https://github.com/haslie22)  
**Discord:** [haslie](https://discord.com/users/911775166642679858)  
**Telegram:** [@haslie22](https://t.me/haslie22)

## 🙋🏼‍♀️ Some words about myself

I’m a frontend developer with a solid foundation in building accessible, user-friendly web applications and over five years of experience as a UX/UI and graphic designer. My design background gives me a strong eye for usability, consistency and visual detail, which I carry into development.

I’ve also contributed to an open-source educational platform used by thousands of students, where I improved usability, added new features to enhance the learning experience and created study materials on front-end development and core programming concepts.

## 👩🏼‍💻 Skills

### Frontend Development

- **Languages & Core:** HTML, CSS, JavaScript, TypeScript
- **Styling & UI:** CSS Modules, Sass, Material UI, Angular Material, Ant Design
- **Frameworks & Libraries:** React, React Router, Next.js, Angular, RxJS
- **Build & Bundling Tools:** Webpack, Vite
- **Testing:** React Testing Library, Jest

### Backend Development

- **Languages & Frameworks:** Node.js, Nest.js
- **APIs & Data:** GraphQL, REST, Prisma, Swagger / OpenAPI
- **Databases:** PostgreSQL
- **Authentication & Security:** JWT
- **Containerization:** Docker

### Accessibility & Performance

- WCAG 2.2
- VoiceOver
- Browser DevTools (Chrome, Firefox, Safari)

### Development Tools

- Visual Studio Code
- Postman
- ESLint, Prettier

### Version Control & Collaboration

- Git, GitHub, GitLab
- Jira, Confluence, Trello

### Design Tools

- Figma
- Adobe Photoshop, Illustrator, InDesign
- Tilda, Wix

### E-commerce Platforms

- Commercetools

## ✏️ Code example from LeetCode

**Description:**  
Given an unsorted integer array `nums`. Return the smallest positive integer that is not present in `nums`.

**Constraints:**

- You must implement an algorithm that runs in **O(n)** time.
- You must use **O(1)** auxiliary space.

**Solution:**

```js
function firstMissingPositive(nums) {
  const l = nums.length;

  for (let i = 0; i < l; i++) {
    if (nums[i] < 1) nums[i] = l + 2;
  }

  for (let i = 0; i < l; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (index < l) nums[index] = -Math.abs(nums[index]);
  }

  for (let i = 0; i < l; i++) {
    if (nums[i] > 0) return i + 1;
  }

  return l + 1;
}
```

## 💼 Work experience

### Frontend Developer Intern

**EPAM Systems**
July 2025 - Till Now

### Activist, Developer

**Rolling Scopes School**
March 2023 - Till Now

### UX/UI Designer, Graphic Designer

**Freelance**
October 2020 - September 2025

## 📚 Education and courses

**School of Business, BSU**  
Department of Digital Systems and Technologies

- [React](https://hexlet.io/programs/js-react-development) Course, Hexlet
- [NodeJS](https://app.rs.school/certificate/4mbfvszb) Course, Rolling Scopes School
- [JS/FE](https://app.rs.school/certificate/lau5254j) Course, Rolling Scopes School
- [JS/FE Pre-School](https://app.rs.school/certificate/lbck59ki) Course, Rolling Scopes School
- Interface Design Course, CIDR
- Digital Design Course, CIDR

## 📢 Languages

- **Russian:** Native
- **Belarusian:** Native
- **English:** B2+ (EPAM English Test result)
- **Italian:** B2
- **Lithuanian:** A1+
