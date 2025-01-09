import qrcode

# Define your AR page URL
ar_url = "https://your-hosted-html-link.com"

# Generate and save the QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(ar_url)
qr.make(fit=True)

# Save QR code as an image
img = qr.make_image(fill_color="black", back_color="white")
img.save("assets/img/qr-code.png")

print("QR Code generated and saved in assets/img/qr-code.png")
