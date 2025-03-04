# My Angular Portfolio

This is a personal portfolio web application built with **Angular** and **Angular Material**. It showcases sections like About, Education, Skills, Projects, and Contact.

## 🚀 Features

- **Dynamic Navigation**: Easily switch between sections using Angular Router and Material Tabs.
- **Loading Spinner**: Displays a spinner during route changes for better UX.
- **Responsive Design**: Optimized for different screen sizes with Angular Material components.
- **Modular Structure**: Components split into dedicated modules for clean and maintainable code.

## 🛠️ Built With

- **Angular CLI** v15.2.11
- **Angular Material** (Toolbar, Tabs, Cards, Lists, Spinner, Icons, Chips, Tooltips, Progress Bar)
- **TypeScript**
- **HTML & CSS**

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── about/
│   │   ├── education/
│   │   ├── skills/
│   │   ├── projects/
│   │   └── contact/
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.module.ts
│   └── app-routing.module.ts
├── assets/
└── index.html
```

## 🛠️ Angular Material Modules Used

- `MatToolbarModule` — For the app header
- `MatTabsModule` — For tab navigation
- `MatCardModule` — To display content in cards
- `MatListModule` — For lists of items
- `MatProgressSpinnerModule` — Loading spinner
- `MatIconModule` — Icons for visual elements
- `MatTooltipModule` — Tooltips for extra info
- `MatProgressBarModule` — Progress indicators
- `MatChipsModule` — Skill chips or tags

## 📂 Routing

```typescript
const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent }
];
```

## 🏃‍♀️ Running the Project

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
ng serve
```
Navigate to `http://localhost:4200/` in your browser.

3. **Build for production:**
```bash
ng build --prod
```

## 🧪 Testing

- **Unit Tests:**
```bash
ng test
```

- **End-to-End Tests:**
```bash
ng e2e
```

## 🎯 Future Improvements

- Add animations for smoother transitions.
- Implement a contact form with email integration.
- Add lazy loading for better performance.

## 📜 License
This project is licensed under the MIT License.

---

Let me know if you want any adjustments or extra sections! 🚀

