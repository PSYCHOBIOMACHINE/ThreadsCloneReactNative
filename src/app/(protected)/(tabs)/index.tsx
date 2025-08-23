import { FlatList, Text, View } from 'react-native';
import { posts } from '@/dmnData';
import PostListItem from '@/components/PostListItem';
import { Link } from 'expo-router';

export default function Homescreen() {
  return ( 
    <FlatList 
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      ListHeaderComponent={() => (
      <>
        <Link href='/new/' className='text-red-500 p-4 text-center text-3xl font-bold'>new thread</Link>
        <Link href='/login/' className='text-red-500 p-4 text-center text-3xl font-bold'>login</Link>
       

      </>
       )}/>
  );
}

