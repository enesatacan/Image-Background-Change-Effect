# 🚀 Daily JavaScript App - 20: Image Background Change Effect

This repository is part of my Daily JavaScript Coding Challenge to build one JavaScript project every day. 🌟 The goal is to refine my JavaScript skills 🧠 while fostering consistency in coding. 💻✨

## ✨ Features  
- **Interactive Slider**: Drag the slider to reveal a portion of the "original" image on top of the transparent image.  
- **Dynamic Image Width**: Automatically adjusts the width of the comparison area based on user interaction.  
- **Responsive Design**: Adapts to various screen sizes for a seamless user experience.  

## 🛠 How It Works  
### JavaScript Logic:  
1. **Dynamic Width Adjustment**:  
   The width of the overlaying image is dynamically calculated based on the user's mouse position within the container.  

2. **Mousemove Event**:  
   A `mousemove` event listener updates the overlay width and slider position in real time.  

3. **Elements & Functionality**:  
   - The `.img-wrap` element reveals the "original" image.
   - The `#line` span acts as the draggable slider indicator.  

### HTML Structure:  
- The **container** holds:  
  - A base transparent image (`transparent.png`)  
  - An overlay "original" image (`original.jpg`) inside `.img-wrap`  
  - A draggable slider indicator (`arrow.png`) inside `#line`  


## ⚙️ How to Use  
1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/enesatacan/Image-Background-Change-Effect
   ```  

2. **Open the Project**:  
   Open the `index.html` file in your browser to use the tool.  

3. **Customize Images**:  
   Replace the `transparent.png` and `original.jpg` files in the `img/` directory with your own images.  

4. **Style Adjustments**:  
   Modify `style.css` to change the layout, colors, or animations as needed.  

## 🛠 Technologies Used  
- **HTML5**: Page structure and layout.  
- **CSS3**: Styling and responsive design.  
- **JavaScript**: Interactive functionality with event-driven programming.  
---

**Screenshots**: 

![image](https://github.com/user-attachments/assets/5f98f6b7-f8bd-406f-a95b-9d98033e1df1)
