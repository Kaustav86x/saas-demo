"use client";


import { useRouter } from 'next/router';
import { Button } from './ui/button';
import { MessageSquarePlusIcon } from 'lucide-react';

function CreateChatButton() {
    const router = useRouter();
    const CreateNewChat = async () => { 
    router.push(`./chat/randomChat`);
}
  return (
    <Button variant={'secondary'}>
        <MessageSquarePlusIcon/>
    </Button>
  );
}

export default CreateChatButton;