<script setup lang="ts">
// Function to handle the PDF download
const downloadPDF = () => {
  // Replace this path with the actual path to your PDF file
  const pdfPath = '/documents/call-for-abstracts.pdf';
  
  // Create an anchor element and trigger the download
  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = 'call-for-abstracts.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold text-center mb-8">Call for Abstracts</h1>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <p class="text-lg mb-4">
          We invite researchers and professionals to submit their abstracts for the upcoming conference.
          All the information regarding submission guidelines, important dates, and formatting instructions
          is available in the document below.
        </p>
        
        <div class="flex justify-center mt-8">
          <button 
            @click="downloadPDF" 
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Call for Abstracts (PDF)
          </button>
        </div>
      </div>
      
      <div class="bg-gray-100 rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Important Information</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>Abstract submission deadline: [Insert Date]</li>
          <li>Notification of acceptance: [Insert Date]</li>
          <li>Full paper submission: [Insert Date]</li>
        </ul>
        <p class="mt-4">
          Please ensure you read the complete guidelines in the document before submitting your abstract.
          For any questions, contact us at: <a href="mailto:conference@example.com" class="text-blue-600 hover:underline">conference@example.com</a>
        </p>
      </div>
    </div>
  </div>
</template>
