import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

type SampleQueryProps = {
    query: string
};

interface Link {
    id: string;
    description: string;
}

interface Links {
    links: Link[];
}

interface Data {
    feed: Links;
}

const SampleQuery: React.FC<SampleQueryProps> = ({query}) => {
    return (
        <Query<Data> query={gql(query)}>
            {({data, error, loading}) => {
                if (loading) return <div>Fetching</div>;
                if (error) return <div>Error</div>;

                const links = (data && data.feed.links) || [];

                return (
                    <ul>
                        {links.map((link: Link, idx:number) => {
                            return (
                                <li key={idx}>
                                    <span>{link.id}</span>
                                    <span> : </span>
                                    <span>{link.description}</span>
                                </li>
                            );
                        })}
                    </ul>
                )
            }}
        </Query>
    );
};

export default SampleQuery;