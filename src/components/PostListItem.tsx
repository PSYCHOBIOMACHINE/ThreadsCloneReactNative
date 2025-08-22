import { Text } from 'react-native';
import { Post } from '@/types'

export default function PostListItem({ post }: { post: Post}) {

    return (
        <Text className='text-white'>{post.content}</Text>
    ) 
}