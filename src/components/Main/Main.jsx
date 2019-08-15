import React, { PureComponent } from 'react';
import container from "components/container";
import styles from './Main.styl';

const statusMessage = {
    fetching: 'Wait...',
    error: 'Error...',
};

function WaitingBlock(props) {
    const { status } = props;
    const isVisible = status === 'fetching' || status === 'error';
    const text = statusMessage[status];

    return <div
        className={styles.waiting}
        style={{display: isVisible ? 'block' : 'none'}}
    >
        {text}
    </div>
}
class Main extends PureComponent {
    componentDidMount() {
        this.props.setList();
        this.scrollBottom();
    }

    addJoke = () => {
        const { addJoke } = this.props;
        addJoke();
    };

    componentDidUpdate() {
        const { status } = this.props;
        if (status === 'success' || status === 'error' || status === 'fetching') {
            this.scrollBottom();
        }
    }

    scrollBottom = () => {
        const { wrap } = this;
        if (wrap) {
            setImmediate(() => {
                wrap.scrollTo(0,Math.pow(10,10));
            })
        }
    };

    render() {
        const { data: { list }, status } = this.props;
        return (
            <div className={styles.wrap} ref={node => this.wrap = node}>
                <div className={styles.content}>
                    <button type="button" className={styles.more} onClick={this.addJoke}>More!!!!</button>
                    {list.map((data, index)=><div className={styles.block} key={data.id + index}>{data.value}</div>)}
                    <WaitingBlock status={status}/>
                </div>
            </div>
        );
    }
}

export default container(Main);
