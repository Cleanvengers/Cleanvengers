## Hi there 👋

<!--
**Cleanvengers/Cleanvengers** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
# 🛡️ Cleanvengers: Field-Operations Core

نظام إدارة عمليات ميدانية عالي الموثوقية مصمم بمعمارية تضمن سلامة البيانات (Data Integrity) في أصعب ظروف الشبكة.

## 🚀 المعمارية التقنية (Technical Stack)
- **Node.js & TypeScript**: للنمذجة الصارمة للبيانات.
- **PostgreSQL + PostGIS**: للتعامل مع الموقع الجغرافي (Geofencing) والعمليات الذرية (Atomic Transactions).
- **Redis**: لطبقة الـ Idempotency لمنع تكرار الأفعال.
- **Transactional Outbox Pattern**: لضمان وصول الأحداث (Events) والاتصال بالأنظمة الخارجية بدون فقدان بيانات.

## 🏗️ مفاهيم النظام الأساسية
- **Optimistic Locking**: استخدام `status_version` لمنع تضارب البيانات عند التعديلات المتزامنة.
- **State Machine**: آلة حالة صارمة تمنع تخطي المراحل التشغيلية (Transit -> Arrival -> InProgress).
- **Idempotency**: دعم كامل لرأس `X-Idempotency-Key` لضمان أن إعادة المحاولة (Retry) لا تسبب تكراراً في الواقع.

## 🛠️ التشغيل السريع (Local Setup)
1. قم بتثبيت المكتبات: `npm install`
2. إعداد قاعدة البيانات: قم بتشغيل ملفات الـ SQL في مجلد `migrations/`.
3. تشغيل المشروع: `npm run dev`

## 📡 الأتمتة والارتباط (CI/CD)
يتم الربط حالياً مع GitHub و Render لضمان التحديث المستمر مع كل `git push`.
