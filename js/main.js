$(async function () {
  await loadChapter(1);
});

$('.aside-link').each(function () {
  $(this).on('click', async function (e) {
    e.preventDefault();
    $('.aside-link').each(function () {
      $(this).removeClass('selected');
    });
    $(this).addClass('selected');

    const chapter = $(this).html().split(' ')[1];
    await loadChapter(chapter);

    if (window.innerWidth < 768) {
      $('#aside-content').addClass('hidden');
      $('#aside').removeClass('w-64');
      $('#aside').addClass('w-20');
    }
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
});

$('#aside-toggle').on('click', () => {
  const asideContent = $('#aside-content');
  const aside = $('#aside');
  const content = $('#content');
  if (window.innerWidth < 768) {
    asideContent.toggleClass('hidden');
    if (aside.hasClass('w-20')) {
      aside.removeClass('w-20');
      aside.addClass('w-64');
    } else {
      aside.removeClass('w-64');
      aside.addClass('w-20');
    }
  } else {
    asideContent.toggleClass('md:block');
    if (aside.hasClass('md:w-64')) {
      aside.removeClass('md:w-64');
      aside.addClass('w-20');
      content.removeClass('md:ml-64');
      content.addClass('md:ml-20');
    } else {
      aside.removeClass('w-20');
      aside.addClass('md:w-64');
      content.removeClass('md:ml-20');
      content.addClass('md:ml-64');
    }
  }
});

async function loadChapter(chapterId) {
  try {
    const response = await fetch(`./chapters/chapter-${chapterId}.json`);
    const chapter = await response.json();
    $('#content').html(chapter.problems.map(problem => createProblem(problem)).join(''));

    const oldScript = $('.data-chapter-script');
    if (oldScript) {
      oldScript.remove();
    }
    const script = document.createElement('script');
    script.src = `./js/chapters/chapter-${chapterId}.js`;
    script.classList.add('data-chapter-script');
    document.body.appendChild(script);
  } catch (error) {
    $('#content').html(`<div class="text-red-500">Not Found</div>`);
  }
}

function createProblem(problem) {
  return `
    <div class="border border-gray-300 p-6 rounded-md mb-6">
      <div class="flex justify-between">
        <h3 class="font-bold text-2xl mb-4">${problem.title}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-500 cursor-pointer toggle-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div>
      ${problem.content ? `<p class='max-w-3xl'>${problem.content}
      ${problem.inputs ? `
          ${problem.inputs.map(input => `
            ${input.name} = <input id="p${problem.id}-${input.id}" type="${input.type}" /> ${input.unit}
          `).join(', ')}
      </p>` : ''}` : ''}
      ${Array.isArray(problem.imageSrc) ? `<div class='flex flex-col md:flex-row'>
      ${problem.imageSrc.map(src => `
      <div class="flex-1">
        <img src="./images/${src}" alt="" />
      </div>
    `).join('')}
      </div>` : problem.imageSrc ? `
        <div class="flex-1">
          <img src="./images/${problem.imageSrc}" alt="" />
        </div>
      ` : ''}
      ${problem.parts.map(part => createPart(part, problem.id)).join('<hr />')}
      </div>
    </div>
  `;
}

function createPart(part, problemId) {
  return `
    <div class="problem-part">
      <div class="space-y-4 flex-1">
        <p>
          <span class="font-bold text-lg">${part.title}</span>
          <br />
          ${part.description ? part.description : ''}
          </p>
          <p class="leading-9">
          ${part.content}
          ${part.inputs ? part.inputs.map(input => `
            ${input.name} = <input id="p${problemId}-${part.id}-${input.id}" type="${input.type}" /> ${input.unit}
          `).join(', ') : ''}
        </p>
        ${part.need ? `<h4 class="font-bold text-md">${part.need}</h4>` : ''}
        ${part.no_answer ? '' :
      `<div>
        <h4 class="font-bold text-lg">Answer:</h4>
          ${part.answer ? `<p>${part.answer.name} = <span id="p${problemId}-${part.id}-answer" class="text-red-600 font-bold"></span></p>` : ` <p>-> <span id="p${problemId}-${part.id}-answer" class="text-red-600 font-bold"></span></p>`}
          <button id="p${problemId}-${part.id}-submit" class="mt-2 py-2 px-4 bg-green-500 rounded-md text-white hover:bg-opacity-70 duration-150">
            Answer
          </button>
        </div> `}
      </div>
     
      ${Array.isArray(part.imageSrc) ? part.imageSrc.map(src => `
        <div class="flex-1">
          <img src="./images/${src}" alt="" />
        </div>
      `).join('') : part.imageSrc ? `
        <div class="flex-1">
          <img src="./images/${part.imageSrc}" alt="" />
        </div>
      ` : ''}
    </div>
  `;
}
