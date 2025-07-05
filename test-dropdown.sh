#!/bin/bash

echo "🔍 Testing AI on Turbo Navigation Dropdowns"
echo "=========================================="
echo ""

# Check if the dev server is running
echo "📡 Checking development server status..."
if curl -s "http://localhost:3001/en" > /dev/null 2>&1; then
    echo "✅ Development server is running on port 3001"
else
    echo "❌ Development server is not running. Please start it with: npm run dev"
    exit 1
fi

echo ""
echo "🎯 Manual Testing Checklist:"
echo "1. Open http://localhost:3001/en in your browser"
echo "2. Hover over 'Services' button - dropdown should appear"
echo "3. Move mouse over the dropdown - it should stay visible"
echo "4. Move mouse away - dropdown should disappear after 300ms"
echo "5. Repeat for 'Solutions' and 'Products' dropdowns"
echo "6. Click on dropdown items - they should navigate correctly"
echo ""

echo "🔧 Common Issues to Check:"
echo "- Dropdown appears but immediately disappears"
echo "- Mouse hover doesn't trigger dropdown"
echo "- Dropdown is positioned incorrectly"
echo "- Links inside dropdown don't work"
echo "- Mobile menu button doesn't work"
echo ""

echo "🌍 Test URLs:"
echo "- English: http://localhost:3001/en"
echo "- Spanish: http://localhost:3001/es"
echo "- French: http://localhost:3001/fr"
echo "- Polish: http://localhost:3001/pl"
echo ""

echo "📱 Mobile Test:"
echo "- Resize browser window to mobile size"
echo "- Click hamburger menu button"
echo "- Verify mobile menu opens with all navigation items"
echo ""

echo "✨ Ready to test! Open the URLs above and verify dropdown behavior."
