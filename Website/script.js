const wasteData = {

    organic: {
        keywords: [
            "banana", "fruit", "vegetable", "food",
            "peel", "leftover", "food waste",
            "leaves", "organic", "tea", "coffee"
        ],
        category: "Wet / Organic Waste",
        icon: "🍃",
        confidence: "96%",
        reason: "This item is biodegradable organic material.",
        disposal: "Place it in the appropriate wet or organic waste collection.",
        tip: "Composting organic waste can help reduce landfill waste."
    },

    recyclable: {
        keywords: [
            "plastic bottle", "bottle", "newspaper",
            "paper", "cardboard", "box", "plastic",
            "can", "tin", "metal", "magazine"
        ],
        category: "Dry / Recyclable Waste",
        icon: "♻️",
        confidence: "94%",
        reason: "This material can commonly be recovered or recycled when properly segregated.",
        disposal: "Keep the item clean and dry and place it in the appropriate dry or recyclable collection.",
        tip: "Reuse materials where possible and reduce unnecessary single-use products."
    },

    ewaste: {
        keywords: [
            "phone", "mobile", "computer",
            "laptop", "charger", "keyboard",
            "mouse", "electronic", "tablet",
            "earphone", "headphone", "television",
            "tv"
        ],
        category: "E-Waste",
        icon: "📱",
        confidence: "97%",
        reason: "Electronic products contain materials that require specialized collection and recycling.",
        disposal: "Take the item to an authorized e-waste collection or recycling facility.",
        tip: "Repair, reuse or donate electronic devices when practical."
    },

    hazardous: {
        keywords: [
            "battery", "chemical", "paint",
            "medicine", "pesticide", "acid",
            "solvent", "bulb", "fluorescent"
        ],
        category: "Hazardous / Special Handling",
        icon: "⚠️",
        confidence: "98%",
        reason: "This item may require specialized handling because it can contain hazardous materials.",
        disposal: "Do not place it in regular household waste. Follow local authorized collection and disposal guidelines.",
        tip: "Keep hazardous materials separate from normal household waste."
    },

    glass: {
        keywords: [
            "glass", "glass bottle", "glass jar"
        ],
        category: "Glass / Special Handling",
        icon: "🍾",
        confidence: "93%",
        reason: "Glass requires appropriate collection to improve recycling and reduce handling risks.",
        disposal: "Handle carefully and follow local glass-recycling or waste-collection guidelines.",
        tip: "Reuse glass containers when safe and practical."
    }
};


function analyzeWaste() {

    const inputElement = document.getElementById("wasteInput");

    const input = inputElement.value
        .toLowerCase()
        .trim();

    if (input === "") {
        alert("Please enter a waste item first.");
        inputElement.focus();
        return;
    }

    let selected = null;

    for (let key in wasteData) {

        const item = wasteData[key];

        for (let keyword of item.keywords) {

            if (input.includes(keyword)) {
                selected = item;
                break;
            }
        }

        if (selected) {
            break;
        }
    }


    if (!selected) {

        selected = {
            category: "General / Other Waste",
            icon: "🗑️",
            confidence: "Low",
            reason: "The item could not be confidently classified from the provided description.",
            disposal: "Check your local waste-management guidelines before disposal.",
            tip: "When uncertain, verify the correct disposal category."
        };
    }


    displayResult(input, selected);

    saveHistory(input, selected.category);

    updateDashboard();
}


function displayResult(input, data) {

    document.getElementById("resultSection")
        .classList.remove("hidden");

    document.getElementById("categoryIcon")
        .textContent = data.icon;

    document.getElementById("category")
        .textContent = data.category;

    document.getElementById("confidence")
        .textContent = data.confidence + " Confidence";

    document.getElementById("reason")
        .textContent = data.reason;

    document.getElementById("disposal")
        .textContent = data.disposal;

    document.getElementById("tip")
        .textContent = data.tip;


    const warning = document.getElementById("warning");

    if (
        data.category.includes("Hazardous") ||
        data.category.includes("E-Waste")
    ) {

        warning.classList.remove("hidden");

        warning.querySelector("span").textContent =
            "Special materials should be handled through authorized collection facilities. Local disposal rules may vary.";

    } else {

        warning.classList.add("hidden");
    }


    document.getElementById("resultSection")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
}


function useExample(example) {

    document.getElementById("wasteInput").value = example;

    analyzeWaste();
}


function handleEnter(event) {

    if (event.key === "Enter") {
        analyzeWaste();
    }
}


function previewImage(event) {

    const file = event.target.files[0];

    if (!file) {
        return;
    }

    const preview = document.getElementById("imagePreview");

    const reader = new FileReader();

    reader.onload = function(e) {

        preview.innerHTML = `
            <img src="${e.target.result}" alt="Uploaded waste image">
            <p style="font-size:11px;margin-top:5px;">
                Image uploaded for prototype demonstration.
            </p>
        `;
    };

    reader.readAsDataURL(file);
}


function saveHistory(item, category) {

    let history =
        JSON.parse(localStorage.getItem("ecoHistory")) || [];

    history.unshift({
        item: item,
        category: category,
        date: new Date().toLocaleString()
    });

    history = history.slice(0, 10);

    localStorage.setItem(
        "ecoHistory",
        JSON.stringify(history)
    );
}


function getHistory() {

    return JSON.parse(
        localStorage.getItem("ecoHistory")
    ) || [];
}


function updateDashboard() {

    const history = getHistory();

    document.getElementById("totalAnalyses")
        .textContent = history.length;

    const recyclable = history.filter(item =>
        item.category.includes("Recyclable")
    ).length;

    document.getElementById("recyclableCount")
        .textContent = recyclable;


    const points = history.length * 10;

    document.getElementById("ecoPoints")
        .textContent = points;


    let level = "Beginner";

    if (points >= 100) {
        level = "Eco Champion";
    } else if (points >= 50) {
        level = "Eco Explorer";
    } else if (points >= 20) {
        level = "Eco Learner";
    }

    document.getElementById("ecoLevel")
        .textContent = level;


    displayHistory(history);
}


function displayHistory(history) {

    const container =
        document.getElementById("history");

    if (history.length === 0) {

        container.innerHTML =
            `<p class="empty-history">
                No analyses yet. Start analyzing your waste!
            </p>`;

        return;
    }


    container.innerHTML = history
        .map(item => `
            <div class="history-item">
                <div>
                    <strong>${item.item}</strong>
                    <small>${item.date}</small>
                </div>

                <strong>${item.category}</strong>
            </div>
        `)
        .join("");
}


function clearHistory() {

    localStorage.removeItem("ecoHistory");

    updateDashboard();
}


function toggleTheme() {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "ecoTheme",
        isDark ? "dark" : "light"
    );
}


function loadTheme() {

    const theme =
        localStorage.getItem("ecoTheme");

    if (theme === "dark") {
        document.body.classList.add("dark");
    }
}


loadTheme();
updateDashboard();