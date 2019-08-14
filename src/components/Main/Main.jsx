import React, { PureComponent } from 'react';
import container from "components/container";
import styles from './Main.styl';

function WaitingBlock(props) {
    return <div className={styles.waiting} style={{display: props.status === 'fetching' ? 'block' : 'none'}}>Wait...</div>
}
class Main extends PureComponent {
    addJoke = () => {
        const { addJoke } = this.props;
        addJoke()
    };

    render() {
        const { data: { list }, status } = this.props;
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
