import { VisualEditing } from '@sanity/visual-editing/remix'

import { client } from "../lib/sanity";
import { useLiveMode } from '../lib/loader';

export default function LiveVisualEditing() {
    useLiveMode({ client })

    return <VisualEditing />
}