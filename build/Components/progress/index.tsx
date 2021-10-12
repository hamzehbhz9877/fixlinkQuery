import QProgress, {NProgressOptions} from "nprogress"

interface withTrickleRate extends NProgressOptions {
    trickleRate: number
}

QProgress.configure({showSpinner: false, minimum: 0.08, trickleRate: .03} as withTrickleRate)

const LinearProgress = () => {
    return QProgress
};

export default LinearProgress;