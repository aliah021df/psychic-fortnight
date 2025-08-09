// src/header-embed.tsx
// این فایل برای زمانی است که می‌خواهیم کامپوننت Header را به صورت مستقل در یک DOM Element رندر کنیم.
"use client"; // حتماً این را اضافه کنید

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../components/Header'; // مسیر صحیح Header.tsx خود را قرار دهید

// یک تابع برای رندر کردن Header
function renderHeader(elementId: string) {
  const container = document.getElementById(elementId);
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <Header />
      </React.StrictMode>
    );
  } else {
    console.error(`Container element with ID "${elementId}" not found.`);
  }
}

// این تابع را به Window اضافه می‌کنیم تا از بیرون قابل دسترسی باشد
// این به ما اجازه می‌دهد از داخل وردپرس آن را فراخوانی کنیم
(window as any).renderHeaderComponent = renderHeader;