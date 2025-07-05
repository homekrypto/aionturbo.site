#!/usr/bin/env node

const http = require('http');
const https = require('https');
const url = require('url');

const baseUrl = 'http://localhost:3000';
const languages = ['en', 'es', 'fr', 'de', 'pl', 'pt', 'ar', 'tr', 'ja'];
const pages = ['', '/about', '/services', '/solutions', '/products', '/case-studies', '/contact'];

async function testPage(testUrl) {
  return new Promise((resolve) => {
    const urlObj = url.parse(testUrl);
    const httpModule = urlObj.protocol === 'https:' ? https : http;
    
    const req = httpModule.get(testUrl, (res) => {
      resolve({
        url: testUrl,
        status: res.statusCode,
        success: res.statusCode >= 200 && res.statusCode < 300
      });
    });
    
    req.on('error', (err) => {
      resolve({
        url: testUrl,
        status: 'ERROR',
        success: false,
        error: err.message
      });
    });
    
    req.setTimeout(5000, () => {
      req.destroy();
      resolve({
        url: testUrl,
        status: 'TIMEOUT',
        success: false,
        error: 'Request timeout'
      });
    });
  });
}

async function testAllPages() {
  console.log('Testing all pages across all languages...\n');
  
  const results = [];
  let totalTests = 0;
  let passedTests = 0;
  let failedTests = 0;
  
  for (const lang of languages) {
    console.log(`\n🌍 Testing language: ${lang.toUpperCase()}`);
    console.log('='.repeat(40));
    
    for (const page of pages) {
      const testUrl = `${baseUrl}/${lang}${page}`;
      const result = await testPage(testUrl);
      
      totalTests++;
      
      if (result.success) {
        console.log(`✅ ${result.url} - ${result.status}`);
        passedTests++;
      } else {
        console.log(`❌ ${result.url} - ${result.status}${result.error ? ` (${result.error})` : ''}`);
        failedTests++;
      }
      
      results.push(result);
      
      // Small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 TEST SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total tests: ${totalTests}`);
  console.log(`Passed: ${passedTests} (${((passedTests / totalTests) * 100).toFixed(1)}%)`);
  console.log(`Failed: ${failedTests} (${((failedTests / totalTests) * 100).toFixed(1)}%)`);
  
  if (failedTests > 0) {
    console.log('\n❌ FAILED TESTS:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`   ${r.url} - ${r.status}${r.error ? ` (${r.error})` : ''}`);
    });
  } else {
    console.log('\n🎉 All tests passed!');
  }
  
  return { totalTests, passedTests, failedTests, results };
}

// Run the test
testAllPages().then(summary => {
  process.exit(summary.failedTests > 0 ? 1 : 0);
}).catch(err => {
  console.error('Test script error:', err);
  process.exit(1);
});
