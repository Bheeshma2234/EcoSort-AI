# 🌱 EcoSort AI – Smart Waste Segregation Assistant

## 📌 Project Overview

**EcoSort AI** is a web-based smart waste segregation assistant designed to help users identify the appropriate category and disposal method for common waste items.

The project addresses the everyday problem of incorrect waste segregation by providing simple recommendations, explanations, sustainability tips, and special-handling warnings.

This project was developed as part of the **1M1B AI for Sustainability Virtual Internship**, in collaboration with **IBM SkillsBuild & AICTE**.

---

## 🎯 Sustainable Development Goals

### SDG 12 – Responsible Consumption and Production

EcoSort AI promotes responsible waste segregation, recycling awareness, and appropriate disposal practices.

### SDG 11 – Sustainable Cities and Communities

The project supports cleaner and more sustainable communities by encouraging better waste-management practices.

---

## ❗ Problem Statement

People often face difficulty in identifying the correct waste category and disposal method for everyday items.

Items such as food waste, plastic bottles, paper, glass, batteries, and electronic devices require different handling. Incorrect segregation can reduce recycling efficiency and may create safety issues for special waste.

EcoSort AI aims to make waste segregation guidance simple, accessible, and easy to understand.

---

## 💡 Proposed Solution

EcoSort AI provides a simple web interface where users can enter a description of a waste item.

For example:

```text
banana peel
used plastic water bottle
newspaper
old mobile phone
used battery
```

The system processes the input using curated classification logic and provides:

* 🗑️ Waste category
* ♻️ Recommended disposal action
* 💡 Reason for classification
* 🌱 Sustainability tip
* ⚠️ Special-handling warning when required

---

## 🤖 AI Methodology

The current prototype demonstrates an **AI-assisted decision-support workflow using curated classification logic** for common waste descriptions.

The system maps user inputs to predefined waste categories and provides corresponding recommendations and explanations.

### Current Workflow

```text
User Input
    ↓
Waste Description
    ↓
EcoSort AI
    ↓
Classification Logic
    ↓
Waste Category
    ↓
Recommended Action
    ↓
Reason + Sustainability Tip
```

### Future AI Workflow

```text
Text / Image Input
       ↓
   AI Model
       ↓
Waste Identification
       ↓
Category Classification
       ↓
Disposal Recommendation
       ↓
Sustainability Guidance
```

> **Note:** The current prototype does not use a trained machine-learning model. The image-upload feature currently provides an image preview and is designed as a foundation for future multimodal AI integration.

---

## ✨ Features

### 🔍 Waste Analyzer

Users can enter descriptions of common waste items and receive classification results.

### ♻️ Waste Categories

The prototype supports categories such as:

* Wet / Organic Waste
* Dry / Recyclable Waste
* E-Waste
* Glass / Special Handling
* Hazardous / Special Handling

### 💡 Disposal Guidance

The system provides a recommended action for each identified category.

### 🌱 Sustainability Tips

Users receive simple tips encouraging responsible waste management.

### ⚠️ Safety Warnings

Special waste such as batteries and electronic devices can display additional handling warnings.

### 🧪 Example Inputs

Example buttons allow users to quickly test common waste items.

### ⌨️ Enter-Key Support

Users can press **Enter** to analyze their waste description.

### 🖼️ Image Upload

The prototype includes an image-upload interface that currently displays an image preview.

### 📊 Dashboard

The dashboard displays information such as:

* Total analyses
* Recyclable items
* Eco points
* Eco level
* Recent analysis

### 💾 Local History

Analysis information can be stored locally using browser **LocalStorage**.

### 🌙 Dark Mode

A dark-mode interface is provided for improved viewing comfort.

---

## 🧪 Prototype Testing

The following test cases were performed:

| No. | Test Input                | Category                     |
| --- | ------------------------- | ---------------------------- |
| 1   | Banana peel               | Wet / Organic Waste          |
| 2   | Used plastic water bottle | Dry / Recyclable Waste       |
| 3   | Newspaper                 | Dry / Recyclable Waste       |
| 4   | Old mobile phone          | E-Waste                      |
| 5   | Used battery              | Hazardous / Special Handling |
| 6   | Food leftovers            | Wet / Organic Waste          |
| 7   | Cardboard box             | Dry / Recyclable Waste       |
| 8   | Broken glass              | Glass / Special Handling     |

Additional interface tests included:

* Example button
* Enter-key analysis
* Image upload preview
* Dashboard
* Analysis history
* Eco points
* Eco level
* Dark mode

---

## 🛠️ Technologies Used

* **HTML5** – Web page structure
* **CSS3** – Styling and responsive interface
* **JavaScript** – Classification logic and user interactions
* **LocalStorage** – Local analysis history and user progress
* **Web Browser** – Running and testing the prototype

---

## 🏗️ Project Structure

```text
EcoSort-AI/
│
├── Website/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── Documentation/
│   └── EcoSort_AI_Project_Report.docx
│
├── Presentation/
│   ├── EcoSort_AI_Final_Submission.pptx
│   └── EcoSort_AI_Final_Submission.pdf
│
├── screenshots/
│   ├── 01-banana-peel.png
│   ├── 02-plastic-bottle.png
│   ├── 03-newspaper.png
│   ├── 04-mobile-phone.png
│   ├── 05-battery.png
│   ├── 06-food.png
│   ├── 07-cardboard.png
│   ├── 08-glass.png
│   ├── 09-image-upload.png
│   ├── 10-dashboard.png
│   └── 11-dark-mode.png
│
└── README.md
```

---

## 🚀 How to Run

### Option 1 – Open Locally

1. Download or clone this repository.
2. Open the `Website` folder.
3. Open `index.html` in a web browser.
4. Enter a waste description.
5. Click **Analyze** or press **Enter**.

### Option 2 – GitHub Pages

The project can be hosted using **GitHub Pages** to make the prototype accessible through a web link.

---

## 🛡️ Responsible AI

EcoSort AI considers the following responsible AI principles:

### Transparency

The system provides a category, reason, and recommendation instead of only displaying an unexplained result.

### Fairness

Classification should use consistent rules without making assumptions about users.

### Privacy

The basic prototype does not require users to provide personal information.

### Safety

Special waste such as batteries and electronic devices is highlighted for appropriate handling.

### Human Oversight

Users should verify local waste-management rules because disposal requirements may differ between locations.

---

## ⚠️ Limitations

The current prototype has some limitations:

* Classification is based on curated logic rather than a trained ML model.
* Ambiguous or mixed-material waste may require human judgment.
* Waste-management rules can vary by location.
* Image upload currently provides only an image preview.
* The prototype has not been validated against a large real-world dataset.
* Real-world deployment would require broader testing and local waste-management integration.

---

## 🔮 Future Scope

Future versions of EcoSort AI can include:

