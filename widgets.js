const POST_DATA = [
    {
        "path": "binance-fee-explain",
        "title": "Binance Fees Explained: Spot, Futures, Options & Full Comparison With Other Exchanges (2026 Guide)",
        "category": "Finance",
        "date": "January 15, 2026",
        "excerpt": "Binance is one of the world’s largest cryptocurrency exchanges by trading volume and liquidity. One of the main reasons traders choose Binance is its highly competitive fee structure for both spot and derivatives markets.",
        "thumbnail": "images/binance-fees-guide-2026.png"
    },
    {
        "path": "spot-vs-future",
        "title": "Spot vs Futures Trading – Which One Is Better for Small Accounts in 2026?",
        "category": "Finance",
        "date": "January 16, 2026",
        "excerpt": "One of the most common questions among new and small traders is whether spot trading or futures trading is better for a small account. While futures trading looks attractive because of leverage and fast profits, it also carries much higher risk and hidden costs.",
        "thumbnail": "images/spotvfuture.png"
    },
    {
        "path": "Best-Crypto-Exchanges-for-Low-Fees",
        "title": "Best Crypto Exchanges for Low Fees in 2026 (Real Comparison Table)",
        "category": "Finance",
        "date": "January 12, 2026",
        "excerpt": "Looking for the best crypto exchanges with low fees in 2026? This guide compares the fee structures of top exchanges like Binance, Coinbase, Kraken, and more.",
        "thumbnail": "images/best-crypto-exchanges-low-fees-2026.png"
    },
    {
        "path": "why-your-profit-look-good-but-your-balance-not-grow",
        "title": "Why Your Profits Look Good but Your Balance Doesn’t Grow (The 2026 Fee Trap)",
        "category": "Finance",
        "date": "December 5, 2025",
        "excerpt": "Why do your profits look good but your balance doesn’t grow? The answer lies in hidden fees and compounding costs that are often overlooked.",
        "thumbnail": "images/whynotgrow.png"
    },
    {
        "path": "which-exchange-has-the-best-liquidity-for-small-caps",
        "title": "Which Exchange Has the Best Liquidity for Small Caps in 2026?",
        "category": "Finance",
        "date": "January 10, 2026",
        "excerpt": "Small-cap cryptocurrencies often suffer from low liquidity. Which exchanges offer the best liquidity for small-cap coins in 2026?",
        "thumbnail": "images/whichexvhan.png"
    },
    {
        "path": "zero-fee-trading",
        "title": "Zero Fee Trading: The Ultimate Guide to Avoiding Hidden Costs in 2026",
        "category": "Finance",
        "date": "January 12, 2026",
        "excerpt": "Learn how to avoid hidden fees and maximize your profits in 2026 with zero-fee trading strategies.",
        "thumbnail": "images/zerofee.png"
    }
    ,
    {
        "path": "is-it-too-late",
        "title": "Is It Too Late to Buy Bitcoin in 2026? (The Post-Halving Reality)",
        "category": "Crypto",
        "date": "Dec 5, 2025",
        "excerpt": "Is it too late to buy Bitcoin in 2026? This article explores the post-halving market conditions and what it means for investors.",
        "thumbnail": "images/toolate.png"
    }
];

function initWidgets() {
    // 1. Build Recent Posts (Sidebar)
    const recentContainer = document.getElementById('recent-posts-widget');
    if (recentContainer) {
        recentContainer.innerHTML = POST_DATA.slice(0, 3).map(post => `
            <div class="post-card">
                <img src="${post.thumbnail}" alt="${post.title}" class="post-thumbnail">
                <div class="post-info">
                    <h3 class="post-title"><a href="${post.path}">${post.title}</a></h3>
                </div>
            </div>
        `).join('');
    }

    // 2. Build Categories List (Sidebar)
    const categoryContainer = document.getElementById('categories-widget');
    if (categoryContainer) {
        const categories = [...new Set(POST_DATA.map(p => p.category))];
        categoryContainer.innerHTML = categories.map(cat => `
            <li><a href="index?filter=${encodeURIComponent(cat.toLowerCase())}">${cat}</a></li>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', initWidgets);