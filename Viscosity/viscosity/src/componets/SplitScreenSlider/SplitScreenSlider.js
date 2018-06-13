import React, { Component } from 'react';
import './SplitScreenSlider.css';

class SplitScreenSlider extends Component {




  render() {
    return (
        <div className="SplitScreenSlider">
            <div class="split-container">
                <div class="split-item split-left">

                    <img alt="Node.js img" class="split-image" src="http://upload.wikimedia.org/wikipedia/commons/8/89/William.IV.of.Great.Britain.JPG" />
                
                    <h3>Node.js Developer</h3>
                    <p>
                    ויליאם הרביעי (נולד בשם ויליאם הנרי; 21 באוגוסט 1765 - 20 ביוני 1837) 
                    היה מלך הממלכה המאוחדת של בריטניה הגדולה ואירלנד ומלך הנובר מ-26 
                    ביוני 1830 ועד יום מותו.
                    </p>
                    <a href="http://he.wikipedia.org/wiki/%D7%95%D7%99%D7%9C%D7%99%D7%90%D7%9D_%D7%94%D7%A8%D7%91%D7%99%D7%A2%D7%99,_%D7%9E%D7%9C%D7%9A_%D7%94%D7%9E%D7%9E%D7%9C%D7%9B%D7%94_%D7%94%D7%9E%D7%90%D7%95%D7%97%D7%93%D7%AA">קרא עוד</a>		
                </div>
                
                <div class="split-item split-right">
                    <img alt="react.js img" class="split-image" src="http://upload.wikimedia.org/wikipedia/commons/b/ba/King_George_V_1911_color-crop.jpg" />
                    <h3>React.js Developer</h3>
                    <p>
                    ג'ורג' החמישי (3 ביוני 1865 - 20 בינואר 1936), 
                    הידוע גם בשמו המלא ג'ורג' פרדריק ארנסט אלברט, היה מלך הממלכה 
                    המאוחדת והדומיניונים הבריטים.
                    </p>
                    <a href="http://he.wikipedia.org/wiki/%D7%92%27%D7%95%D7%A8%D7%92%27_%D7%94%D7%97%D7%9E%D7%99%D7%A9%D7%99,_%D7%9E%D7%9C%D7%9A_%D7%94%D7%9E%D7%9E%D7%9C%D7%9B%D7%94_%D7%94%D7%9E%D7%90%D7%95%D7%97%D7%93%D7%AA">קרא עוד</a>
                </div>
            </div> 
            <div class="split-container">
                <div class="split-item split-left">

                    <img alt="SEO img" class="split-image" src="http://upload.wikimedia.org/wikipedia/commons/8/89/William.IV.of.Great.Britain.JPG" />
                
                    <h3>SEO Specalist</h3>
                    <p>
                    ויליאם הרביעי (נולד בשם ויליאם הנרי; 21 באוגוסט 1765 - 20 ביוני 1837) 
                    היה מלך הממלכה המאוחדת של בריטניה הגדולה ואירלנד ומלך הנובר מ-26 
                    ביוני 1830 ועד יום מותו.
                    </p>
                    <a href="http://he.wikipedia.org/wiki/%D7%95%D7%99%D7%9C%D7%99%D7%90%D7%9D_%D7%94%D7%A8%D7%91%D7%99%D7%A2%D7%99,_%D7%9E%D7%9C%D7%9A_%D7%94%D7%9E%D7%9E%D7%9C%D7%9B%D7%94_%D7%94%D7%9E%D7%90%D7%95%D7%97%D7%93%D7%AA">קרא עוד</a>		
                </div>
                
                <div class="split-item split-right">
                    <img alt="SEO img" class="split-image" src="http://upload.wikimedia.org/wikipedia/commons/b/ba/King_George_V_1911_color-crop.jpg" />
                    <h3>PPC Specalist</h3>
                    <p>
                    ג'ורג' החמישי (3 ביוני 1865 - 20 בינואר 1936), 
                    הידוע גם בשמו המלא ג'ורג' פרדריק ארנסט אלברט, היה מלך הממלכה 
                    המאוחדת והדומיניונים הבריטים.
                    </p>
                    <a href="http://he.wikipedia.org/wiki/%D7%92%27%D7%95%D7%A8%D7%92%27_%D7%94%D7%97%D7%9E%D7%99%D7%A9%D7%99,_%D7%9E%D7%9C%D7%9A_%D7%94%D7%9E%D7%9E%D7%9C%D7%9B%D7%94_%D7%94%D7%9E%D7%90%D7%95%D7%97%D7%93%D7%AA">קרא עוד</a>
                </div>
            </div>    
        </div>
    );
  }
}

export default SplitScreenSlider;


