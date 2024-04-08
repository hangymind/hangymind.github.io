document.addEventListener('DOMContentLoaded', function() {
  const usernameInput = document.getElementById('username');
  const readyBtn = document.getElementById('ready-btn');
  const popupBtn = document.getElementById('popup-btn');
  const popupWindow = document.getElementById('popup-window');
  const generatedStringElement = document.getElementById('generated-string');

  usernameInput.addEventListener('input', function() {
    readyBtn.disabled = !usernameInput.value;
  });

  readyBtn.addEventListener('click', function() {
    window.location.href = 'https://hangymind.github.io/newtest';
  });

  popupBtn.addEventListener('click', function() {
    popupWindow.style.display = 'block';
  });

  function generateRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function displayDateAndString() {
    const currentDate = new Date().toLocaleString();
    const randomString = generateRandomString(11);
    generatedStringElement.innerHTML = `
      <p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi>c</mi><mi>u</mi><mi>r</mi><mi>r</mi><mi>e</mi><mi>n</mi><mi>t</mi><mi>D</mi><mi>a</mi><mi>t</mi><mi>e</mi></mrow><mo>&lt;</mo><mi mathvariant="normal">/</mi><mi>p</mi><mo>&gt;</mo><mo>&lt;</mo><mi>p</mi><mo>&gt;</mo></mrow><annotation encoding="application/x-tex">{currentDate}&lt;/p&gt;
      &lt;p&gt;</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord"><span class="mord mathnormal">c</span><span class="mord mathnormal">u</span><span class="mord mathnormal">rre</span><span class="mord mathnormal">n</span><span class="mord mathnormal">t</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mord mathnormal">a</span><span class="mord mathnormal">t</span><span class="mord mathnormal">e</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">/</span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span></span></span></span>{randomString}</p>
    `;
  }

  displayDateAndString(); // Initial display
});
