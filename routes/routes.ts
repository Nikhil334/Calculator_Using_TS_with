import express,{Request,Response} from 'express';
const router = express.Router();
import homecontroller from '../controllers/home';
import addcontrol from '../controllers/addcontroller';
import divcontrol from '../controllers/divcontroller';
import logcontrol from '../controllers/logcontroller';
import mulcontrol from '../controllers/mulaontroller';
import powcontrol from '../controllers/powcontroller';
import sqrtcontrol from '../controllers/sqrtcontroller';
import subcontrol from '../controllers/subcontroller';
import check from '../middleware/checklength';

router.route("/").get(homecontroller);
router.route("/add").post(check,addcontrol);
router.route("/div").post(check,divcontrol);
router.route("/log").post(logcontrol);
router.route("/mul").post(check,mulcontrol);
router.route("/pow").post(check,powcontrol);
router.route("/sqrt").post(sqrtcontrol);
router.route("/sub").post(check,subcontrol);

export {router};
