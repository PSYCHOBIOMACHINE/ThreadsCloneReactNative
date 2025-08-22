import { FlatList, Text, View } from 'react-native';
import { posts } from '@/dmnData';
import PostListItem from '@/components/PostListItem';

export default function Homescreen() {
  return ( 
    <FlatList 
      data={posts}
      renderItem={({ item }) => 
      <PostListItem post={item} />
    }
     />
  );
}

