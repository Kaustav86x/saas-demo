"use client";


import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { MessageSquarePlusIcon } from 'lucide-react';

function CreateChatButton() {
    const router = useRouter();
    const CreateNewChat = async () => { 
    router.push(`./chat/randomChat`);
}
  return (
    <Button variant={'ghost'}>
        <MessageSquarePlusIcon/>
    </Button>
  );
}

export default CreateChatButton;