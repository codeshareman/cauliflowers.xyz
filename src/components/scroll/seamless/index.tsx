import React, { Component } from 'react'
import { ScrollDataItem } from './type';
import './index.scss';

type P = {
    dataSource: Array<ScrollDataItem>
}
type S = {
    firstRows: Array<ScrollDataItem>,
    secondRows: Array<ScrollDataItem>

}

// 无缝滚动
class Seamless extends Component<P, S> {
    $seamless: any;
    $cloneEle: any;
    constructor(props) {
        super(props);
        this.$seamless = React.createRef();
        this.$cloneEle = React.createRef();
        this.state = {
            firstRows: [],
            secondRows: []
        }//

    }

    componentDidMount() {
        this.marquee('marquee');
    }

    marquee = function (id) {
        try { document.execCommand("BackgroundImageCache", false, true); } catch (e) { };
        var container = document.getElementById(id),
            original = container.getElementsByTagName("dt")[0],
            clone = container.getElementsByTagName("dd")[0],
            speed = arguments[1] || 60;
        clone.innerHTML = original.innerHTML;
        var rolling = function () {
            if (container.scrollLeft == clone.offsetLeft) {
                container.scrollLeft = 0;
            } else {
                container.scrollLeft++;
            }
        }
        var timer = setInterval(rolling, speed)//设置定时器
        container.onmouseover = function () { clearInterval(timer) }//鼠标移到marquee上时，清除定时器，停止滚动
        container.onmouseout = function () { timer = setInterval(rolling, speed) }//鼠标移开时重设定时器
    }

    render() {
        const { dataSource } = this.props;
        const firstRows = dataSource.slice(0, 8);
        const secondRows = dataSource.slice(8, 16);
        return <div id="marquee">
            <div className="wrapper">
                <dl>
                    <dt>
                        <div>
                            {
                                firstRows.map((item, index) => {
                                    return <a key={index} className="item"><img src={item.cover} /></a>
                                })
                            }
                        </div>
                        <div>
                            {
                                secondRows.map((item, index) => {
                                    return <a key={index} className="item"><img src={item.cover} /></a>
                                })
                            }
                        </div>
                    </dt>
                    <dd></dd>
                </dl>
            </div>
        </div>
        {/* <div className="clone-wrapper" ref={node => { this.$cloneEle = node }}></div> */ }
    }
}

export default Seamless;