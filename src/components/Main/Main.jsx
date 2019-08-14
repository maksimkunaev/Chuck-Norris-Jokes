import React, { PureComponent } from 'react';
import container from "components/container";
import styles from './Main.styl';

function WaitingBlock(props) {
    const { status } = props;
    const isVisible = status === 'fetching' || status === 'error';
    let text = '';

    if (status === 'fetching') {
        text = 'Wait...';
    } else if (status === 'error') {
        text= 'Error';
    } else {
        text = '';
    }
    return <div
        className={styles.waiting}
        style={{display: isVisible ? 'block' : 'none'}}
    >
        {text}
    </div>
}
class Main extends PureComponent {
    componentDidMount() {
        this.props.setList()
    }

    addJoke = () => {
        const { addJoke } = this.props;
        addJoke()
    };

    render() {
        const { data: { list }, status } = this.props;
        // console.log(`this.props.data.list`, this.props)
        return (
            <main>
                <div className={styles.wrap}>
                    <button type="button" className={styles.more} onClick={this.addJoke}>More!!!!</button>
                    {list.map(data=><div className={styles.block} key={data.id}>{data.value}</div>)}
                    <WaitingBlock status={status}/>
                </div>
            </main>
        );
    }
}

export default container(Main);
