// Booking form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                tourId: document.getElementById('tour-date').getAttribute('data-tour-id'),
                tourDate: document.getElementById('tour-date').value,
                totalPeople: document.getElementById('total-people').value,
                children: document.getElementById('children').value || 0,
                pensioners: document.getElementById('pensioners').value || 0,
                isGroup: document.getElementById('is-group').checked,
                isSchoolGroup: document.getElementById('is-school-group').checked,
                clientName: document.getElementById('client-name').value,
                clientPhone: document.getElementById('client-phone').value,
                clientEmail: document.getElementById('client-email').value,
                clientNotes: document.getElementById('client-notes').value
            };

            try {
                // Send to server (mock implementation)
                const response = await mockApiCall(formData);
                
                if (response.success) {
                    showConfirmation(response.data);
                } else {
                    throw new Error(response.error || 'Ошибка при отправке данных');
                }
            } catch (error) {
                alert('Ошибка: ' + error.message);
                console.error('Booking error:', error);
            }
        });
    }
});

// Mock API call function
function mockApiCall(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                data: {
                    bookingNumber: 'BK-' + Math.floor(100000 + Math.random() * 900000),
                    ...data
                }
            });
        }, 1000);
    });
}

// Show confirmation modal
function showConfirmation(data) {
    const confirmationModal = document.getElementById('confirmation-modal');
    if (confirmationModal) {
        confirmationModal.classList.remove('hidden');
        
        // Populate confirmation details
        document.getElementById('confirmation-details').innerHTML = `
            <div class="space-y-4">
                <div class="bg-blue-50 p-4 rounded-lg">
                    <h3 class="text-xl font-bold text-blue-800 mb-2">Ваше бронирование подтверждено!</h3>
                    <p class="text-gray-700">Номер бронирования: ${data.bookingNumber}</p>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div class="font-bold">Тур:</div>
                    <div>${document.getElementById('modal-tour-title').textContent}</div>
                    
                    <div class="font-bold">Дата:</div>
                    <div>${new Date(data.tourDate).toLocaleDateString('ru-RU')}</div>
                    
                    <div class="font-bold">Контактные данные:</div>
                    <div>${data.clientName}, ${data.clientPhone}</div>
                </div>
            </div>
        `;
    }
}