<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center mb-8">Submit Abstract</h1>
    
    <div class="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-semibold mb-4">Abstract Submission Instructions</h2>
      
      <div class="mb-6 text-center">
        <img src="/FileBtn.jpg" 
             alt="Submit" 
             class="mx-auto max-h-[350px] w-auto mb-5 aspect-[4/5]" 
             width="280" 
             height="350" 
             style="margin-bottom: 20px; object-fit: cover;" />
        <a href="https://easychair.org/conferences/?conf=icmhs25morelia" 
           target="_blank" 
           class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-colors">
          <div class="flex items-center">
            <span>SUBMIT: EasyChair Platform</span>
          </div>
        </a>
      </div>
      
      <div class="text-center mb-6">
        <p class="font-semibold text-lg mb-4">DON'T FORGET TO VISIT THE FOLLOWING LINK TO CLARIFY ANY DOUBTS ABOUT USING THE EasyChair PLATFORM:</p>
        <a href="https://youtu.be/etpSOzqjExE?si=UDaHw-d5hmzxzTWc" 
           target="_blank"
           class="text-blue-600 hover:text-blue-800 underline">
          EasyChair Tutorial Video
        </a>
      </div>
      
      <div class="grid md:grid-cols-2 gap-6 mt-8">
        <div class="border p-4 rounded-lg text-center">
          <p class="mb-3">If you prefer, consult the PDF manual to submit an abstract to our XXV-SMH Congress in English:</p>
          <a href="/manual-english.pdf" 
             download
             class="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition-colors">
            <div class="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download English Manual</span>
            </div>
          </a>
        </div>
        
        <div class="border p-4 rounded-lg text-center">
          <p class="mb-3">If you prefer, consult the PDF manual to submit an abstract to our XXV-SMH Congress in the Spanish language:</p>
          <a href="/manual-spanish.pdf" 
             download
             class="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition-colors">
            <div class="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Spanish Manual</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
