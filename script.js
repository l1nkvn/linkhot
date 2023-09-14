// Thay đổi đường dẫn tới tệp JSON của bạn
const jsonFilePath = 'links.json';

// Lấy dữ liệu từ tệp JSON và hiển thị nó bằng Tailwind CSS
fetch(jsonFilePath)
  .then(response => response.json())
  .then(data => {
    const boxesContainer = document.getElementById('boxes');

    // Lặp qua mảng dữ liệu và tạo "box" cho mỗi phần tử
    data.forEach(item => {
      const box = document.createElement('div');
      box.className = 'bg-white p-4 rounded-lg shadow-md ';

      // Tạo HTML sử dụng Tailwind CSS để hiển thị dữ liệu
      box.innerHTML = `
      <div>
        <h2 class="text-3xl text-center font-bold mb-4">${item.title}</h2>
        <div class="flex flex-row gap-8 justify-center">
            <p class="text-black font-bold">Ngày tạo: <span class="font-semibold">${item.createdAt}</span></p>
            <p class="text-black font-bold">Cập nhật: <span class="font-semibold">${item.updatedAt}</span></p>
        </div>
        
      </div>

      <div class="mt-4">
        <h3 class="text-2xl text-center font-semibold mb-2">${item.name}</h3>
        ${item.groups.map(group => `
          <div class="bg-gray-200 rounded-lg text-lg text-center font-semibold my-2">${group.groupTitle}</div>
          <div class="flex flex-wrap justify-center">
            ${group.links.map(link => `
              <div class="link rounded-lg p-2 mr-2 mb-2">
                <a href="${link.url}" target="_blank" class="text-red-500 font-semibold">${link.title}</a>
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>
      <div class="mt-4">
        <p class="text-black font-bold">Note: <span class="font-semibold">${item.note}</span></p>
      </div>
      <div class="mt-4">
        <p class="text-black font-bold">Người tải lên: <span class="font-semibold">${item.uploader}</span></p>
      </div>
    `;

      boxesContainer.appendChild(box);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });
