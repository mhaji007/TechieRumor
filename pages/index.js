import Error from 'next/error';
import Link from 'next/link';
import StoryList from '../Components/StoryList';
import Layout from '../components/Layout';

class Index extends React.Component {

    static async getInitialProps({req, res, query}) {
        

        let stories;
        let page;

        try {
            page= Number(query.page) || 1;
            console.log(page);
            const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
            stories = await response.json();
        } catch (err) {
            console.log(err);
            stories = [];
        }

        return {stories, page};
    }

    render() {

        const {stories, page} = this.props;

        if (stories.length === 0) {
            return <Error statusCode={503}/>
        }

        return (
            <Layout title="Techie Rumor" description="A news aggregator modeled after
            Hacker News built with Next.js">

                <StoryList stories = {stories}/>

                <footer>
                    <Link href={`/?page=${page+1}`}>
                        <a>Next Page ({page + 1}) </a>
                    </Link>
                </footer>

                <style jsx>
                {`
                    footer {
                        padding: 1em;
                    }
                    
                    footer a {

                        font-weight: bold;
                        color:black;
                        text-decoration:none;

                    }
                
                
                `}

                </style>
                
            </Layout>
        )

    }
}

export default Index;