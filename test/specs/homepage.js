const fs = require('fs');
const path = require('path');

// Path untuk menyimpan laporan
const reportPath = path.join(__dirname, 'reports', 'test_report.txt');

// Buat folder jika belum ada
if (!fs.existsSync(path.join(__dirname, 'reports'))) {
    fs.mkdirSync(path.join(__dirname, 'reports'));
}

// Mendapatkan tanggal dan waktu saat ini
function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString(); // Format tanggal dan waktu lokal
}

// Untuk menyimpan hasil laporan
let reportResults = [];

describe('Kanggo Website Home Page', () => {
    before(async () => {
        await browser.url('https://www.kanggo.id');
    });

    after(() => {
        const currentDateTime = getCurrentDateTime();
        const reportContent = `[${currentDateTime}]\n` + reportResults.join('\n') + '\n\n';
        fs.appendFileSync(reportPath, reportContent);
    });

    it('should have the right title', async () => {
        try {
            await browser.waitUntil(async () => {
                const title = await browser.getTitle();
                return title === "Jasa Tukang Bangunan & Aplikasi Pertukangan No 1 | Kanggo";
            }, {
                timeout: 5000,
                timeoutMsg: 'expected title to be different after 5s'
            });

            const title = await browser.getTitle();
            expect(title).toEqual("Jasa Tukang Bangunan & Aplikasi Pertukangan No 1 | Kanggo");
            
            // Menyimpan hasil laporan
            reportResults.push('Report title muncul dan sesuai (pass)');
        } catch (error) {
            // Menyimpan hasil jika ada error
            reportResults.push('Report title tidak ditemukan atau tidak sesuai (failed)');
            throw error; // Melempar ulang error agar pengujian dianggap failed
        }
    });

    it('should validate the services element', async () => {
        try {
            await browser.execute(() => {
                window.scrollBy(0, 1000);
            });

            await browser.pause(2000); // Tunggu 2 detik untuk memastikan elemen dimuat

            const layananElement = await $('div.relative.pb-20.text-center.text-3xl.font-extrabold.sm\\:text-5xl.lg\\:pb-32.lg\\:pt-20');

            expect(await layananElement.isDisplayed()).toBe(true);
            const layananText = await layananElement.getText();
            expect(layananText).toContain("Layanan");
            expect(layananText).toContain("Kanggo");

            // Menyimpan hasil laporan
            reportResults.push('Report element layanan ditemukan dan sesuai (pass)');

            if (!await layananElement.isDisplayed() || !layananText.includes("Layanan") || !layananText.includes("Kanggo")) {
                throw new Error("Element tidak ditemukan atau teks tidak sesuai.");
            }
            
            await browser.execute(() => {
                window.scrollTo(0, 0);
            });

            await browser.pause(2000); // Tunggu 2 detik
        } catch (error) {
            // Menyimpan hasil jika ada error
            reportResults.push('Element layanan tidak ditemukan dan tidak sesuai (failed)');
            throw error; // Melempar ulang error agar pengujian dianggap failed
        }
    });
});
