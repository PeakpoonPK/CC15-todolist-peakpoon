#1 Setup Project
-`npx create-react-app <project-name>`
-`cd <project-name>`
`npm start` or `npm run start` or `npx react-scripts start`
- auto open browser localhost:3000

#2 About Project
- Other code / dependentcies อยู่ใน node_modules
    -ลบทิ้งได้
    -ติดตั้งใหม่ด้วย `npm install` จะทำการติดตั้ง
    dependencies ที่อยู่ใน package.json ให้แัตโนมัติ
-   Code เราเอง อยู่ใน src/

#3 : Clean up Project - remove unnecessary thing
clean up index.js
clean up App.js, App.css
clean up public/index.html
remove unnecessary file
restructure folder to app/ component/






#4 : App Layout (or Page layout)

-   วาง layout ของหน้าหลัก (ในที่นี้เรามี 1 หน้า)
-   ในไฟล์ App.js วาง markup สำหรับทำ layout

```css
   <div className='todo'>
        <div className="todo__header">Header</div>
        <div className="todo__sidebar">SideBar</div>
        <div classNAme="todo_content">TodoContent</div>
    </div>
```

-   สร้างไฟล์ App.scss
-   ไฟล์ App.scss : เขียน css สำหรับจัด layout

```scss
$header-height: 44px;
$sidebar-width: 300px;

.todo {
    display: grid;
    grid-template-rows: $header-height calc(100vh - $header-height);
    grid-template-columns: $sidebar-width calc(100vw - $sidebar-width);

    &__header {
        grid-column: 1/3;
        grid-row: 1/2;
    }

    &__sidebar {
        grid-row: 2/3;
        grid-column: 1/2;
        // position: sticky;
    }

    &__content {
        grid-row: 2/3;
        grid-column: 2/3;

        // other css
        overflow-y: scroll;
        padding: 20px 30px;
        padding-top: 0;
    }
}
```

-   ไฟล์ App.scss : ปรับนามสกุลไฟล์ เป็น App.module.scss
-   หากมี error จากการหา variable ไม่เจอ : ให้ import global css เข้ามาใช้งาน
-   ไฟล์ App.jsx : implement styles ลงไฟล์ App.jsx

```jsx
import styles from 'App.module.scss';

<div className={styles.todo}>
    <div className={styles.todo__header}>Header</div>
    <div className={styles.todo__sidebar}>SideBar</div>
    <div classNAme={styles.todo__content}>TodoContent</div>
</div>;
```
# 5 : UI-TASK

# 5.1 : AppBar or HeaderComponent



-   ติดตั้ง library สำหรับทำ icon : `npm install react-icons` [link to npm](https://www.npmjs.com/package/react-icons) ,[link to document](https://react-icons.github.io/react-icons/)

-   สร้างไฟล์ Header.jsx สำหรับทำ Header

```jsx
<header className='header'>
    {/* Logo */}
    <div className='header__logo'></div>

    {/* Text */}
    <div className='header__text'>
        <h3>Todoist</h3>
    </div>

    {/* Search */}
    <div className='header__search'></div>
</header>
```

-   สร้างไฟล์ Header.module.scss สำหรับ css

```scss
// import global.scss
.header {
    background-color: $primary;
    color: $grey-light;
    padding: 0.5rem 2rem;
    display: flex;
    align-items: center;
    gap: 20px;

    &__logo {
        display: flex;
        cursor: pointer;
        font-size: 24px;
    }

    &__text {
        flex: 1;
    }
    &__search {
        min-width: 300px;
    }
}
```

-   import styles มาใช้ใน JSX
-   implement styles กับ className

```jsx
import styles from './Header.module.scss';

// implement styles กับ className

#### 5.1.1 : Logo

-   แทรก Logo Home ลงใน container

```jsx
import { FaHome } from 'react-icons/fa';
```

```jsx
// add this code in return statement
<div className='header__logo'>
    <FaHome />
</div>

#### 5.1.2 : Search

-   สร้างไฟล์ Search.jsx
-   สร้างไฟล์ Search.module.scss


import { FaSearch } from 'react-icons/fa';
<div className='search'>
    <span className='search__icon'>
        <FaSearch />
    </span>
    <input type='text' className='search__input' placeholder='search' />
</div>;
```

```scss
// import global.scss
.search {
    position: relative;
    border-radius: 4px;

    // magnify-icon
    &__icon {
        // position
        position: absolute;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);

        // decorate
        font-size: 1.6rem;
        font-weight: 200;
        color: grey;

        // control-child
        display: flex;
    }

    &__input {
        width: 100%;
        padding: 5px;
        padding-left: 30px;
        border-radius: 5px;
        border: 1px solid $grey-light;
        font-size: 1.6rem;
        outline: none;
        color: $grey-dark;
    }
}
```
```