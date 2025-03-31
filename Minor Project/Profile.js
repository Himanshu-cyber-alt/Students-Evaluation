
        document.getElementById('certificationCount').addEventListener('change', function() {
            const count = parseInt(this.value) || 0;
            const uploadsContainer = document.getElementById('certificationUploads');
            uploadsContainer.innerHTML = ''; // Clear existing upload fields

            for(let i = 0; i < count; i++) {
                const uploadDiv = document.createElement('div');
                uploadDiv.className = 'certification-upload';
                uploadDiv.innerHTML = `
                    <label>Certification ${i + 1}</label>
                    <div class="input-group">
                        <input type="text" placeholder="Certification Name" required>
                        <i class="fas fa-award"></i>
                    </div>
                    <div class="input-group">
                        <input type="file" accept=".pdf,.jpg,.jpeg,.png" required>
                        <i class="fas fa-upload"></i>
                    </div>
                `;
                uploadsContainer.appendChild(uploadDiv);
            }
        });
