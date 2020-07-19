import Error from 'next/error';
import StoryList from '../Components/StoryList';

class Index extends React.Component {

    static async getInitialProps() {

        let stories;

        try {
            const response = await fetch('https://node-hnapi.herokuapp.com/news?page=1');
            stories = await response.json();
        } catch (err) {
            console.log(err);
            stories = [];
        }

        return {stories};
    }

    render() {

        const {stories} = this.props;

        if (stories.length === 0) {
            return <Error statusCode={503}/>
        }

        return (
            <div>
                <h1>
                    Techie Rumor
                </h1>

                <StoryList stories = {stories}/>
                
            </div>
        )

    }
}

export default Index;